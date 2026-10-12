


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


	'group-photo' : { heiNum : 608, widNum : 606 },
	'lilah'       : { heiNum : 260, widNum : 260 },
	'norah'       : { heiNum : 260, widNum : 260 }


};

// #endregion Constants



// #region Exports

export { PHO_SIZ_OBJ }; // What: Named Exports. Why: The page's img elements read the photo sizes. How: This exports the sizes object.

// #endregion Exports


