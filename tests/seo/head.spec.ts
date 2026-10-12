


// #region Imports

import { expect } from '@playwright/test'; // What: Expect. Why: Each check passes only when the page says what it should. How: This asserts on the page's head, its links, and the crawler files.
import { test   } from '@playwright/test'; // What: Test. Why: Each page and each file is its own test. How: This declares them.


import type { Page } from '@playwright/test'; // What: Page. Why: The head helper reads a Playwright page. How: This types its page parameter.

// #endregion Imports



/**
 * head.spec.ts = Head Spec
 *
 * @summary
 * Checks the site's SEO setup in whichever engine the project runs. The site
 * is tertiary to the brand's main site, theberniebears.com, so only Home and
 * Social Links are indexed: each has its own title, one description of 100
 * to 125 characters, and one canonical address on this domain. About,
 * Contact, and the 404 page carry noindex and neither tag. Every page names
 * the brand as its author and has one h1, and moving between pages swaps the
 * tags rather than piling them up. The structured data describes this site as
 * a WebSite published by The Bernie Bears, whose home is the main site, with
 * the six profiles the Social Links page links to and the email the Contact
 * page offers. robots.txt lets every crawler in and names the sitemap, which
 * lists Home and Social Links alone.
 *
 * Sections:
 *  - Constants
 *  - Helpers
 *  - Module Init
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

const LIV_URL_STR = 'https://theberniebears.dog/'; // What: Live URL String. Why: The canonical links, structured data, and sitemap must all name the live address. How: This is the site's production root.
const MAI_URL_STR = 'https://theberniebears.com/'; // What: Main URL String. Why: The structured data has to send search engines to the brand's main site. How: This is the main site's root.



// #region PAG_HED_ARR

/**
 * PAG_HED_ARR = Page Head Array
 *
 * @summary
 * What each page's head should say. Every row shares one shape, so its fields
 * carry no comments of their own:
 * - `canStr` (String or null): Canonical String, the page's canonical
 *   address, or null for a page that carries noindex and no canonical link.
 * - `patStr` (String): Path String, the address the page is loaded from.
 * - `titStr` (String): Title String, the page's exact title.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const PAG_HED_ARR = [ // What: Page Head Array. Why: Every page's head is checked against what it should say. How: Each row names one page, its title, and its canonical address or null.


	{ canStr : LIV_URL_STR,             patStr : '/',             titStr : 'Lilah & Norah, the Bernie Bears | Bernese Mountain Dogs' },
	{ canStr : `${ LIV_URL_STR }links`, patStr : '/links',        titStr : 'Follow Lilah & Norah | The Bernie Bears'                 },
	{ canStr : null,                    patStr : '/about',        titStr : 'About Lilah & Norah | The Bernie Bears'                  },
	{ canStr : null,                    patStr : '/contact',      titStr : 'Contact | The Bernie Bears'                              },
	{ canStr : null,                    patStr : '/no-such-page', titStr : 'Page Not Found | The Bernie Bears'                       }


];

// #endregion PAG_HED_ARR

// #endregion Constants



// #region Helpers

// #region hedCheFun

/**
 * hedCheFun = Head Check Function
 *
 * @summary
 * Checks that the page showing now has the head its row describes: its exact
 * title, the brand as author, and one h1. A page with a canonical address has
 * that one canonical link, one description of 100 to 125 characters, and no
 * robots tag; a page without one has a noindex robots tag and neither a
 * description nor a canonical link. Counting the tags also catches a
 * navigation that left the previous page's tags behind.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param curPagObj - Current Page Object: The page to check.
 * @param hedRowObj - Head Row Object: The page's row from PAG_HED_ARR.
 *
 * @returns A promise that settles once every check has passed, with no
 *          value.
 *
 * @example
 * ```ts
 * hedCheFun(page, PAG_HED_ARR[0]) // => Promise<void>
 * ```
 *
*/

async function hedCheFun ( curPagObj : Page, hedRowObj : typeof PAG_HED_ARR[ number ] ) : Promise< void > {


	await expect( curPagObj ).toHaveTitle( hedRowObj.titStr ); // What: Title Assertion. Why: Search listings and tabs name the page by its title. How: This waits for the page's own title.

	expect( hedRowObj.titStr.length ).toBeLessThanOrEqual( 60 ); // What: Title Length Assertion. Why: Search listings and link cards cut long titles off. How: This keeps it to 60 characters.

	await expect( curPagObj.locator( 'meta[name="author"]' ) ).toHaveAttribute( 'content', 'The Bernie Bears' ); // What: Author Assertion. Why: A real brand's site names the brand as its author. How: This checks the author tag.

	await expect( curPagObj.getByRole( 'heading', { level : 1 } ) ).toHaveCount( 1 ); // What: Single Heading Assertion. Why: One h1 tells search engines and screen readers what the page is about. How: This checks there's exactly one.



	if ( hedRowObj.canStr === null ) { // What: Noindex Page Branch. Why: About, Contact, and the 404 page must stay out of search results. How: This checks for the noindex tag and the absence of the indexed pages' tags.


		await expect( curPagObj.locator( 'meta[name="robots"]' ) ).toHaveAttribute( 'content', 'noindex' ); // What: Noindex Assertion. Why: Search engines must leave the page out. How: This checks the one robots tag says noindex.

		await expect( curPagObj.locator( 'meta[name="description"], link[rel="canonical"]' ) ).toHaveCount( 0 ); // What: No Index Tags Assertion. Why: A page kept out of search has no use for a description or canonical address, and one left over from the previous page would contradict it. How: This checks there are none.


	}

	else { // What: Indexed Page Branch. Why: Home and Social Links have to be findable and described. How: This checks their one description and canonical link, and that nothing keeps them out.


		const desConStr = await curPagObj.locator( 'meta[name="description"]' ).getAttribute( 'content' ) ?? ''; // What: Description Content String. Why: The description's length is checked against what listings show. How: This reads the one description's text.


		await expect( curPagObj.locator( 'meta[name="description"]' ) ).toHaveCount( 1 ); // What: Single Description Assertion. Why: Two descriptions leave search engines to guess. How: This checks there's exactly one.

		expect( desConStr.length ).toBeGreaterThanOrEqual( 100 ); // What: Description Minimum Assertion. Why: A summary that's too short wastes the space a listing gives it. How: This checks it runs at least 100 characters.

		expect( desConStr.length ).toBeLessThanOrEqual( 125 ); // What: Description Maximum Assertion. Why: Phones cut a summary off around 125 characters. How: This checks it stays within that.

		await expect( curPagObj.locator( 'link[rel="canonical"]' ) ).toHaveCount( 1 ); // What: Single Canonical Assertion. Why: Two canonical links leave search engines to guess. How: This checks there's exactly one.

		await expect( curPagObj.locator( 'link[rel="canonical"]' ) ).toHaveAttribute( 'href', hedRowObj.canStr ); // What: Canonical Assertion. Why: Every address Netlify serves the page at should count as its live one. How: This checks the canonical link names it.

		await expect( curPagObj.locator( 'meta[name="robots"]' ) ).toHaveCount( 0 ); // What: Indexable Assertion. Why: The page has to stay findable. How: This checks it carries no robots tag that could keep it out.


	}


}

// #endregion hedCheFun

// #endregion Helpers



// #region Module Init

for ( const hedRowObj of PAG_HED_ARR ) { // What: Page Head Loop. Why: Every page's head is checked when it's loaded directly, as a search engine loads it. How: This declares one test per page.


	test( `${ hedRowObj.patStr } has the right head`, async ( { page : curPagObj } ) => { // What: Page Head Test. Why: Each page should say what it is and whether it belongs in search results. How: This loads the page and checks its head.


		await curPagObj.goto( hedRowObj.patStr ); // What: Page Open Call. Why: The check starts on its page. How: This loads it.

		await hedCheFun( curPagObj, hedRowObj ); // What: Head Check Call. Why: The page's head is checked against its row. How: This runs every head check.


	} );


}



test( 'moving between pages swaps their head tags', async ( { page : curPagObj } ) => { // What: Navigation Head Test. Why: React adds and removes each page's tags as visitors move around, and a leftover description or noindex would tell search engines the wrong thing. How: This walks from Home to About to Social Links through the site's own links, checking each head.


	await curPagObj.goto( '/' ); // What: Home Open Call. Why: The walk starts on an indexed page. How: This loads the root path.

	await hedCheFun( curPagObj, PAG_HED_ARR[ 0 ] ); // What: Home Head Check. Why: The walk starts from a known head. How: This checks Home's.

	await curPagObj.getByRole( 'navigation', { name : 'Footer' } ).getByRole( 'link', { exact : true, name : 'About' } ).click(); // What: About Link Click. Why: About carries noindex, so Home's description and canonical must go. How: This follows the footer's About link.

	await hedCheFun( curPagObj, PAG_HED_ARR[ 2 ] ); // What: About Head Check. Why: Home's tags must be gone and About's noindex in place. How: This checks About's head.

	await curPagObj.getByRole( 'navigation', { name : 'Footer' } ).getByRole( 'link', { exact : true, name : 'Social Links' } ).click(); // What: Social Links Link Click. Why: Social Links is indexed again, so About's noindex must go. How: This follows the footer's Social Links link.

	await hedCheFun( curPagObj, PAG_HED_ARR[ 1 ] ); // What: Social Links Head Check. Why: About's noindex must be gone and Social Links' own tags in place. How: This checks Social Links' head.


} );



test( 'the structured data points to the main site and matches the pages', async ( { page : curPagObj } ) => { // What: Structured Data Test. Why: Search engines may show the brand's details from the JSON-LD, so every claim has to be true and shown on the site, and the brand's home has to be the main site. How: This reads the JSON-LD and compares it with the Social Links page's profile links and the Contact page's email.


	await curPagObj.goto( '/links' ); // What: Social Links Open Call. Why: The profiles in the data have to be the ones this page links to. How: This loads it.


	const ldjTexStr = await curPagObj.locator( 'script[type="application/ld+json"]' ).textContent() ?? '{}';                                                            // What: Linked-Data-JSON Text String. Why: The structured data is read as written in the page. How: This reads the script's text.
	const socHreArr = await curPagObj.getByRole( 'main' ).locator( 'a[href^="https://"]' ).evaluateAll( ( ancEleArr ) => ancEleArr.map( ( ancCurEle ) => ancCurEle.getAttribute( 'href' ) ?? '' ) ); // What: Social Href Array. Why: The data's profiles have to be the ones the page links to. How: This reads every outside link in the page's content.

	type LdjNodTyp = { '@id'? : string, '@type'? : string, email? : string, name? : string, publisher? : { '@id' : string }, sameAs? : string[], url? : string }; // What: Linked-Data-JSON Node Type. Why: The checks read a handful of fields from each node. How: This names the ones they read, all optional, since a missing one should fail an assertion rather than the parse.

	const ldjGraArr : LdjNodTyp[] = JSON.parse( ldjTexStr )[ '@graph' ] ?? []; // What: Linked-Data-JSON Graph Array. Why: The brand and the site are separate nodes, each checked on its own. How: This parses the text and reads its graph, or an empty list if it's missing.

	const orgNodObj = ldjGraArr.find( ( graNodObj ) => graNodObj[ '@type' ] === 'Organization' ) ?? {}; // What: Organization Node Object. Why: The brand's details are checked together. How: This finds its node, or an empty object if it's missing.
	const webNodObj = ldjGraArr.find( ( graNodObj ) => graNodObj[ '@type' ] === 'WebSite' ) ?? {};      // What: WebSite Node Object. Why: This site's details are checked together. How: This finds its node, or an empty object if it's missing.


	expect( [ orgNodObj.name, orgNodObj.url, webNodObj.name, webNodObj.url ] ).toEqual( [ 'The Bernie Bears', MAI_URL_STR, 'The Bernie Bears', LIV_URL_STR ] ); // What: Brand And Site Assertion. Why: The brand's home is the main site, and this site is only one of its sites. How: This checks the brand's address is the main site's and the site's is this domain's.

	expect( webNodObj.publisher?.[ '@id' ] ).toBe( orgNodObj[ '@id' ] ); // What: Publisher Link Assertion. Why: Search engines join the nodes by their ids. How: This checks the site names the brand as its publisher.

	expect( [ ...( orgNodObj.sameAs ?? [] ) ].sort() ).toEqual( socHreArr.filter( ( hreCurStr ) => !hreCurStr.startsWith( MAI_URL_STR ) ).sort() ); // What: Profiles Assertion. Why: Every profile in the data has to be one the page links to, and every profile the page links to belongs in the data. How: This compares the two lists, leaving out the Shop card's link to the main site.

	await curPagObj.goto( '/contact' ); // What: Contact Open Call. Why: The data's email has to be the one the Contact page offers. How: This loads it.

	await expect( curPagObj.locator( `a[href="mailto:${ orgNodObj.email }"]` ).first() ).toBeAttached(); // What: Email Shown Assertion. Why: The email in the data has to be one the site offers. How: This checks the Contact page links to it.


} );



test( 'robots.txt welcomes crawlers and names the sitemap', async ( { request : reqConObj } ) => { // What: Robots File Test. Why: Crawlers read robots.txt before anything else. How: This fetches it and checks its rules and sitemap line.


	const robTexStr = await ( await reqConObj.get( '/robots.txt' ) ).text(); // What: Robots Text String. Why: The file's rules are checked as served. How: This fetches and reads it.


	expect( robTexStr ).toContain( 'User-agent: *\nAllow: /' ); // What: Allow All Assertion. Why: Every crawler may read the site, since the unwanted pages keep themselves out with noindex. How: This checks the one rule group.

	expect( robTexStr ).toContain( `Sitemap: ${ LIV_URL_STR }sitemap.xml` ); // What: Sitemap Line Assertion. Why: Crawlers find the sitemap from this line. How: This checks it names the live sitemap.


} );



test( 'the sitemap lists Home and Social Links alone', async ( { request : reqConObj } ) => { // What: Sitemap Test. Why: The sitemap should list exactly the indexed pages, by their canonical addresses. How: This fetches it and compares its addresses with the indexed rows.


	const sitXmlStr = await ( await reqConObj.get( '/sitemap.xml' ) ).text(); // What: Sitemap XML String. Why: The file's addresses are checked as served. How: This fetches and reads it.


	expect( [ ...sitXmlStr.matchAll( /<loc>([^<]+)<\/loc>/g ) ].map( ( locMatArr ) => locMatArr[ 1 ] ) ).toEqual( PAG_HED_ARR.filter( ( hedRowObj ) => hedRowObj.canStr !== null ).map( ( hedRowObj ) => hedRowObj.canStr ) ); // What: Indexed Pages Assertion. Why: Listing a noindex page would contradict it, and missing an indexed page slows its discovery. How: This checks the sitemap's addresses equal the indexed pages' canonical addresses, in order.


} );

// #endregion Module Init


