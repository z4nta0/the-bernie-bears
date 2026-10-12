


// #region Imports

import { chromium      } from '@playwright/test'; // What: Chromium. Why: The photos are scaled and encoded by a real browser's canvas, so no image library is needed. How: This launches Playwright's Chromium.
import { fileURLToPath } from 'node:url';         // What: File URL To Path. Why: Every path is resolved from this script's own location. How: This turns a file URL into a path.
import { readFileSync  } from 'node:fs';          // What: Read File Sync. Why: Each original is handed to the browser as data. How: This reads its bytes.
import { statSync      } from 'node:fs';          // What: Stat Sync. Why: The run reports how much the photos shrank. How: This reads each original's size in bytes.
import { writeFileSync } from 'node:fs';          // What: Write File Sync. Why: The encoded photos and the sizes files are saved. How: This writes each one.

// #endregion Imports



/**
 * render.mts = Photo Renderer
 *
 * @summary
 * Rebuilds every photo the site shows from the originals in this folder,
 * writing each as WebP beside the page that shows it: the hero portrait into
 * src/pages/home, and the cartoon and the two sisters' photos into
 * src/pages/about. A photo the page crops to a centered square (the portrait
 * and the sisters, which fill square frames with object-fit cover) is cropped
 * to that square here, so no hidden pixels ship. Each is then scaled down to
 * twice the largest size the site shows it at, never up, and encoded at 0.85
 * quality, the lowest that showed no difference from the original at 3x zoom.
 * Last, it writes a photo-sizes.ts into each page's folder, the width and
 * height of every photo it wrote there, which the page's img elements read
 * so nothing shifts while photos load. Run it with npm run photos whenever a
 * photo is added or replaced, or a display size changes.
 *
 * Sections:
 *  - Constants
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

type PhoRecTyp = { pagStr : string, souStr : string, squBoo : boolean, widNum : number }; // What: Photo Record Type. Why: Each photo is rebuilt from the same four facts. How: This names its page folder, its original's file name, whether it's cropped to a centered square, and its largest width in pixels.

// #region PHO_REC_ARR

/**
 * PHO_REC_ARR = Photo Record Array
 *
 * @summary
 * Every photo the site shows. Every row shares the PhoRecTyp shape, so its
 * fields carry no comments of their own:
 * - `pagStr` (String): Page String, the folder under src/pages the photo and
 *   its sizes file are written into.
 * - `souStr` (String): Source String, the original's file name in this
 *   folder; the WebP takes the same name.
 * - `squBoo` (Boolean): Square Boolean, true when the page shows only the
 *   photo's centered square, so the rest is cropped away.
 * - `widNum` (Number): Width Number, twice the widest the site shows the
 *   photo: the hero portrait's frame reaches about 391px, the cartoon about
 *   303px, and each sister's circle about 130px.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const PHO_REC_ARR : PhoRecTyp[] = [ // What: Photo Record Array. Why: The script rebuilds every photo from one list. How: Each row names one photo and how it's shown.


	{ pagStr : 'about', souStr : 'group-photo.jpg',   squBoo : false, widNum : 606 },
	{ pagStr : 'about', souStr : 'lilah.jpg',         squBoo : true,  widNum : 260 },
	{ pagStr : 'about', souStr : 'norah.jpg',         squBoo : true,  widNum : 260 },
	{ pagStr : 'home',  souStr : 'portrait-both.jpg', squBoo : true,  widNum : 782 }


];

// #endregion PHO_REC_ARR



const PAG_DIR_STR = fileURLToPath( new URL( '../../src/pages/', import.meta.url ) ); // What: Pages Directory String. Why: Each photo is written beside the page that shows it. How: This resolves src/pages, which each row's folder is joined to.
const PHO_DIR_STR = fileURLToPath( new URL( './', import.meta.url ) );               // What: Photo Directory String. Why: The originals live beside this script. How: This resolves this script's own folder.
const QUA_VAL_NUM = 0.85;                                                            // What: Quality Value Number. Why: This is the lowest WebP quality that showed no difference from the originals at 3x zoom, on the portrait's fur and the cartoon's outlines alike. How: Every photo is encoded at it.

// #endregion Constants



// #region Module Init

const broInsObj = await chromium.launch();   // What: Browser Instance Object. Why: The photos are drawn by a real browser. How: This launches Chromium.
const encPagObj = await broInsObj.newPage(); // What: Encode Page Object. Why: The canvas work runs in a page. How: This opens a blank one.


const sizRowMap = new Map< string, [ string, number, number ][] >(); // What: Size Row Map. Why: Each page's sizes file lists only that page's photos. How: This collects each photo's name, height, and width under its page folder.

let befBytNum = 0; // What: Before Bytes Number. Why: The run reports how much smaller the photos got. How: This adds up the originals' sizes.
let aftBytNum = 0; // What: After Bytes Number. Why: The run reports how much smaller the photos got. How: This adds up the encoded files' sizes.


for ( const phoRecObj of PHO_REC_ARR ) { // What: Photo Record Loop. Why: Each original is rebuilt the same way. How: This crops, scales, encodes, and writes one photo per pass.


	const filNamStr = phoRecObj.souStr.slice( 0, -4 ); // What: File Name String. Why: The WebP and its sizes row take the original's name without its extension. How: This cuts the extension off.
	const souUrlStr = `data:image/jpeg;base64,${ readFileSync( `${ PHO_DIR_STR }${ phoRecObj.souStr }` ).toString( 'base64' ) }`; // What: Source URL String. Why: A canvas drawn from a file URL can't be read back, while one drawn from data can. How: This reads the original as a data URL.


	const encResObj = await encPagObj.evaluate( async ( [ souUrlStr, squBoo, widNum, quaValNum ] ) => { // What: Encode Result Object. Why: The browser crops, scales, and encodes the photo. How: This decodes the original, draws its kept part onto a canvas at the fitted size, and returns the WebP data and size.


		const souImaEle = new Image(); // What: Source Image Element. Why: The original has to be decoded before it's drawn. How: This creates an image to load it into.


		souImaEle.src = souUrlStr; // What: Source Address Assignment. Why: The image loads the original's data. How: This sets its source.

		await souImaEle.decode(); // What: Source Decode Wait. Why: Drawing an undecoded image draws nothing. How: This waits until it's ready.


		const sidMinNum = Math.min( souImaEle.naturalWidth, souImaEle.naturalHeight ); // What: Side Minimum Number. Why: A centered square is as wide as the original's shorter side. How: This reads the shorter side.
		const keeHeiNum = squBoo ? sidMinNum : souImaEle.naturalHeight;                // What: Kept Height Number. Why: A square crop keeps only the shorter side's height. How: This picks it, or the whole height.
		const keeWidNum = squBoo ? sidMinNum : souImaEle.naturalWidth;                 // What: Kept Width Number. Why: A square crop keeps only the shorter side's width. How: This picks it, or the whole width.
		const scaValNum = Math.min( 1, widNum / keeWidNum );                           // What: Scale Value Number. Why: The photo fits its width but is never enlarged. How: This takes the smaller of 1 and the fitting scale.
		const outHeiNum = Math.round( keeHeiNum * scaValNum );                         // What: Output Height Number. Why: The canvas is the fitted size. How: This scales the kept height.
		const outWidNum = Math.round( keeWidNum * scaValNum );                         // What: Output Width Number. Why: The canvas is the fitted size. How: This scales the kept width.
		const outCanEle = document.createElement( 'canvas' );                          // What: Output Canvas Element. Why: The photo is redrawn at its new size. How: This creates the canvas.


		outCanEle.height = outHeiNum; // What: Canvas Height Assignment. Why: The canvas has to match the fitted size. How: This sets its height.
		outCanEle.width  = outWidNum; // What: Canvas Width Assignment. Why: The canvas has to match the fitted size. How: This sets its width.


		const outConObj = outCanEle.getContext( '2d' )!; // What: Output Context Object. Why: Drawing goes through the canvas's 2D context. How: This reads it. // What: Non-Null Note. Why: getContext can return null for an unsupported type. How: A 2D context is always available on a fresh canvas.


		outConObj.imageSmoothingQuality = 'high'; // What: Smoothing Quality Assignment. Why: A large downscale should stay sharp without jagged edges. How: This asks for the browser's best resampling.

		outConObj.drawImage( souImaEle, ( souImaEle.naturalWidth - keeWidNum ) / 2, ( souImaEle.naturalHeight - keeHeiNum ) / 2, keeWidNum, keeHeiNum, 0, 0, outWidNum, outHeiNum ); // What: Photo Draw Call. Why: The kept part of the original fills the canvas. How: This draws the centered crop, or the whole photo, scaled to the canvas.



		return { // What: Encode Result Return. Why: Node writes the file and records its size. How: This hands back the WebP's base64 data, its height, and its width.


			b64Str : outCanEle.toDataURL( 'image/webp', quaValNum ).split( ',' )[ 1 ], // What: Base64 String. Why: Only text crosses back from the page. How: This encodes the canvas as WebP and keeps the data after the data URL's comma.
			heiNum : outHeiNum,                                                        // What: Height Number. Why: The sizes file records the photo's height. How: This is the canvas's height.
			widNum : outWidNum                                                         // What: Width Number. Why: The sizes file records the photo's width. How: This is the canvas's width.


		};


	}, [ souUrlStr, phoRecObj.squBoo, phoRecObj.widNum, QUA_VAL_NUM ] as const ); // What: Encode Arguments. Why: The page can't read this script's variables. How: This passes the original, its crop, its width, and the quality in. // What: Type Assertion Note. Why: Playwright types a plain array argument as a list of mixed values. How: as const keeps it a fixed tuple, so each value keeps its own type inside the page.


	const outBufObj = Buffer.from( encResObj.b64Str, 'base64' ); // What: Output Buffer Object. Why: The file is written as bytes. How: This decodes the base64 data.


	writeFileSync( `${ PAG_DIR_STR }${ phoRecObj.pagStr }/${ filNamStr }.webp`, outBufObj ); // What: Photo Write Call. Why: The page imports the encoded photo from its own folder. How: This saves it there.

	sizRowMap.set( phoRecObj.pagStr, [ ...( sizRowMap.get( phoRecObj.pagStr ) ?? [] ), [ filNamStr, encResObj.heiNum, encResObj.widNum ] ] ); // What: Size Row Set. Why: Each page's sizes file lists its own photos. How: This adds the photo's name, height, and width to its page's rows.


	befBytNum += statSync( `${ PHO_DIR_STR }${ phoRecObj.souStr }` ).size; // What: Before Bytes Increase. Why: The total covers every original. How: This adds this original's size.
	aftBytNum += outBufObj.length;                                         // What: After Bytes Increase. Why: The total covers every encoded photo. How: This adds this file's size.


}



await broInsObj.close(); // What: Browser Close Call. Why: The script should exit once every photo is written. How: This shuts Chromium down.



for ( const [ pagStr, sizRowArr ] of sizRowMap ) { // What: Sizes File Loop. Why: Each page folder gets its own sizes file. How: This lays out and writes one file per page.


	sizRowArr.sort( ( rowOneArr, rowTwoArr ) => rowOneArr[ 0 ].localeCompare( rowTwoArr[ 0 ] ) ); // What: Size Row Sort. Why: The sizes file should list its rows in a stable order. How: This sorts them by file name.


	const keyWidNum = Math.max( ...sizRowArr.map( ( sizCurArr ) => sizCurArr[ 0 ].length ) ) + 2;           // What: Key Width Number. Why: Every row's colon lines up after the longest quoted name. How: This measures the longest name plus its two quotes.
	const heiWidNum = Math.max( ...sizRowArr.map( ( sizCurArr ) => String( sizCurArr[ 1 ] ).length ) ) + 1; // What: Height Width Number. Why: Every row's width field starts in one column after the longest height. How: This measures the longest height plus its comma.
	const widWidNum = Math.max( ...sizRowArr.map( ( sizCurArr ) => String( sizCurArr[ 2 ] ).length ) );     // What: Width Width Number. Why: Every row's closing brace lines up after the longest width. How: This measures the longest width.
	const sizLinArr = sizRowArr.map( ( [ filNamStr, heiValNum, widValNum ], rowIndNum ) => `\t${ `'${ filNamStr }'`.padEnd( keyWidNum ) } : { heiNum : ${ `${ heiValNum },`.padEnd( heiWidNum ) } widNum : ${ String( widValNum ).padEnd( widWidNum ) } }${ rowIndNum < sizRowArr.length - 1 ? ',' : '' }` ); // What: Size Line Array. Why: Each row is one aligned line of the sizes object. How: This pads every name, height, and width to its column, with a comma on every row but the last.


	const sizTexStr = `


/**
 * photo-sizes.ts = Photo Sizes
 *
 * @summary
 * The width and height in pixels of every photo this page shows, keyed by
 * its file name without the extension, so each img element can carry its
 * intrinsic size and the page doesn't shift while the photos load. This file
 * is written by design/photos/render.mts each time the photos are rebuilt;
 * edit that script, never this file.
 *
 * Sections:
 *  - Constants
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

type PhoSizTyp = { heiNum : number, widNum : number }; // What: Photo Size Type. Why: Every photo's size has the same shape. How: This names its height and width in pixels.

/**
 * PHO_SIZ_OBJ = Photo Sizes Object
 *
 * @summary
 * One row per photo: heiNum, its height in pixels, and widNum, its width in
 * pixels. Every row has the same two fields, so no row needs a comment of
 * its own.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const PHO_SIZ_OBJ : Record< string, PhoSizTyp > = { // What: Photo Sizes Object. Why: Every img element needs its photo's intrinsic size. How: The page looks each photo's size up by its file name.


${ sizLinArr.join( '\n' ) }


};

// #endregion Constants



// #region Exports

export { PHO_SIZ_OBJ }; // What: Named Exports. Why: The page's img elements read the photo sizes. How: This exports the sizes object.

// #endregion Exports


`; // What: Sizes Text String. Why: The sizes file follows the same formatting rules as every other file, so it's written from this template. How: This fills the template with the sorted rows.


	writeFileSync( `${ PAG_DIR_STR }${ pagStr }/photo-sizes.ts`, sizTexStr ); // What: Sizes Write Call. Why: The page reads its photos' sizes from this file. How: This saves it in the page's folder.


}



console.log( `Wrote ${ PHO_REC_ARR.length } photos, ${ Math.round( befBytNum / 1024 ) } KB down to ${ Math.round( aftBytNum / 1024 ) } KB, and a sizes file for ${ [ ...sizRowMap.keys() ].join( ' and ' ) }.` ); // What: Result Log Call. Why: The run should say what it wrote. How: This prints the photo count, the total sizes before and after, and the pages given sizes files.

// #endregion Module Init


