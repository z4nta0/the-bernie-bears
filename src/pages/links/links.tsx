


// #region Imports

import cssModObj from './links.module.css'; // What: CSS Module Object. Why: The Social Links page is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this object.


import { SOC_PRO_ARR } from '../../ui/social-profiles.ts'; // What: Social Profile Array. Why: The page's first six cards are the girls' profiles, which the phone menu lists too. How: This imports the shared rows.

// #endregion Imports



/**
 * links.tsx = Social Links
 *
 * @summary
 * The Social Links page: a header, a short line, a card for each of the
 * girls' six social profiles and one for the brand's own shop on its main
 * site, and a closing call to follow along. Every card opens its page in a
 * new tab. The site exists to promote the brand and its main site, so the
 * shop sits in the same list as the profiles.
 *
 * Sections:
 *  - Constants
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

// #region SOC_LIN_ARR

/**
 * SOC_LIN_ARR = Social Link Array
 *
 * @summary
 * The girls' six social profiles, then the brand's shop, in the order the page
 * shows them. The profiles come from SOC_PRO_ARR, shared with the phone menu,
 * where every field is described. The shop's row has the same shape, with
 * its colors read from the theme and its icon a plain bag drawn for this
 * page.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const SOC_LIN_ARR = [ // What: Social Link Array. Why: The page lists every place to follow the girls, plus the brand's shop. How: Each row holds a card's colors, text, icon, and address, rendered in this order.


	...SOC_PRO_ARR, // What: Profile Rows Spread. Why: The six profile cards come first, in the shared order. How: This spreads the rows ui/social-profiles.ts holds.

	{ // What: Shop Card. Why: The brand's own store is where fans can support the girls, and this site exists to promote it. How: This card links to the main site's shop.


		bacStr : 'var( --acs-tin-col )', // Accent-Secondary Tint Color = #ddeadc
		colStr : 'var( --acs-dar-col )', // Accent-Secondary Dark Color ~= #4f6f4e
		hanStr : 'theberniebears.com',
		plaStr : 'Shop',
		urlStr : 'https://theberniebears.com/collections/all',

		desStr : "Blankets, tees, bags, and more for Bernie lovers, from The Bernie Bears' official store.",
		icoStr : 'M7 7V6a5 5 0 0 1 10 0v1h-2V6a3 3 0 0 0-6 0v1zM3 7h18l-1.3 14.2A2 2 0 0 1 17.7 23H6.3a2 2 0 0 1-2-1.8z'


	}


];

// #endregion SOC_LIN_ARR

// #endregion Constants



// #region Components

// #region LinPagCom

/**
 * LinPagCom = Links Page Component
 *
 * @summary
 * Renders the Social Links page: the header, the intro line, a card for each
 * row of SOC_LIN_ARR, and the closing call to follow. Each card is a link that
 * opens its page in a new tab, without giving that page access to this one,
 * and hands its brand color to the stylesheet's left stripe through the
 * --soc-car-col custom property. The icons, the arrows, and the paw prints are
 * hidden from screen readers as decoration, so each card is announced by its
 * platform, handle, and sentence.
 *
 * It also sets the page's title, description, and canonical address, which
 * React moves into the document head while the page is shown.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The Social Links page's title, description, canonical link,
 *          and wrapper div.
 *
 * @example
 * ```tsx
 * LinPagCom() // => <LinPagCom />
 * ```
 *
*/

function LinPagCom () : React.JSX.Element {


	return (


		<>{ /* What: Social Links Page Fragment. Why: The page's head tags and its content render side by side. How: This groups them without adding an element. */ }


			<title>Follow Lilah & Norah | The Bernie Bears</title>{ /* What: Page Title Element. Why: Search listings and tabs should say this page is where to follow the girls. How: React 19 moves this title into the document head while the page is shown, ahead of index.html's fallback. */ }

			<meta
				name='description'

				content='Follow Lilah and Norah, the Bernie Bears, on Instagram, TikTok, YouTube, Facebook, X, and Pinterest for bear hugs and fun.'
			/>{ /* What: Description Meta Element. Why: Search listings show a summary of the page under its title. How: React 19 moves this tag into the document head while the page is shown; index.html carries none, so there's only ever one. */ }

			<link
				href='https://theberniebears.dog/links'
				rel='canonical'
			/>{ /* What: Canonical Link Element. Why: Netlify also serves the site at deploy preview and netlify.app addresses, which should all count as one page. How: React 19 moves this link into the document head while the page is shown. */ }



			<div className={ cssModObj.pagEntDiv }>{ /* What: Page Enter Div Element. Why: The Social Links page fades up into place like every other page. How: This holds the page's sections. */ }


				<section className={ cssModObj.pagHedSec }>{ /* What: Page Header Section Element. Why: The page opens with its title. How: This holds the heading and a short line under it. */ }


					<h1 className={ cssModObj.pagTitHea }>Follow the Bears</h1>{ /* What: Page Title Heading Element. Why: The page's heading says what it's for. How: This names the page. */ }

					<p className={ cssModObj.pagSubPar }>Find Lilah & Norah on all their favorite platforms</p>{ /* What: Page Sub Paragraph Element. Why: A short line says where to look. How: This shows it under the heading. */ }


				</section>


				<section className={ cssModObj.linCarSec }>{ /* What: Links Cards Section Element. Why: The cards are the page's content. How: This holds the intro line and the list of cards. */ }


					<p className={ cssModObj.linIntPar }>{ /* What: Links Intro Paragraph Element. Why: A short line says there's a place for every kind of fan. How: This shows it above the cards, ending in a paw print hidden from screen readers. */ }
						Whether you love long videos, quick clips, or scrolling through adorable photos,
						there's a place for every kind of Bernie Bears fan. <span aria-hidden='true'>🐾</span>
					</p>

					<div className={ cssModObj.socLisDiv }>{ /* What: Social List Div Element. Why: The cards stack in one column. How: This lays them out. */ }


						{ SOC_LIN_ARR.map( ( socLinObj ) => ( // What: Social Link Map. Why: Each row of SOC_LIN_ARR gets a card. How: This renders one card per row.


							<a
								key={ socLinObj.plaStr }

								className={ cssModObj.socCarAnc }

								style={ { '--soc-car-col' : socLinObj.colStr } as React.CSSProperties } // What: Card Color Property. Why: The stylesheet draws each card's left stripe in its brand color. How: This hands the row's color to the card's --soc-car-col custom property. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The object holds only this one custom property, which React sets as written.

								href={ socLinObj.urlStr }
								rel='noopener'
								target='_blank'
							>{ /* What: Social Card Anchor Element. Why: Each card takes the visitor to one of the girls' pages, or the brand's shop. How: This opens the row's address in a new tab, without giving that page access to this one, while still letting its analytics see the visit came from this site. */ }


								<div
									className={ cssModObj.socIcoDiv }

									style={{
										background : socLinObj.bacStr,
										color      : socLinObj.colStr
									}}

									aria-hidden='true'
								>{ /* What: Social Icon Div Element. Why: Each card opens with its platform's icon on a pale tile. How: This tints the tile and sets the icon's color, hidden from screen readers as decoration. */ }


									<svg
										className={ cssModObj.socIcoSvg }

										fill='currentColor'
										height='1em'
										viewBox='0 0 24 24'
										width='1em'
									>{ /* What: Social Icon SVG Element. Why: The platform's mark stays sharp at any size. How: This draws the row's path at the tile's font size, in the tile's color. */ }


										<path d={ socLinObj.icoStr } />{ /* What: Social Card Icon Path Element. Why: The mark is one path. How: This draws the row's path data. */ }


									</svg>


								</div>


								<div className={ cssModObj.socBodDiv }>{ /* What: Social Body Div Element. Why: The card's words read as one column. How: This stacks the platform, handle, and sentence. */ }


									<div className={ cssModObj.socPlaDiv }>{ socLinObj.plaStr }</div>{ /* What: Social Platform Div Element. Why: The card names its platform. How: This shows it in small capitals. */ }

									<div
										className={ cssModObj.socHanDiv }

										style={{ color : socLinObj.colStr }}
									>{ socLinObj.hanStr }</div>{ /* What: Social Handle Div Element. Why: The card shows the account to look for. How: This shows the row's handle in its brand color. */ }

									<p className={ cssModObj.socDesPar }>{ socLinObj.desStr }</p>{ /* What: Social Description Paragraph Element. Why: The card says what's there. How: This shows the row's sentence. */ }


								</div>

								<div
									className={ cssModObj.socArrDiv }

									style={{ color : socLinObj.colStr }}

									aria-hidden='true'
								>→</div>{ /* What: Social Arrow Div Element. Why: An arrow shows the card leads somewhere. How: This shows it in the row's brand color, hidden from screen readers as decoration. */ }


							</a>


						))}


					</div>


				</section>



				<section className={ cssModObj.linCtaSec }>{ /* What: Links Call-To-Action Section Element. Why: The page ends by asking visitors to follow along. How: This holds the closing heading and line. */ }


					<div className={ cssModObj.ctaInnDiv }>{ /* What: Call-To-Action Inner Div Element. Why: The closing words sit in the page's centered column. How: This holds the heading and line. */ }


						<h2 className={ cssModObj.ctaTitHea }>Don't miss a thing! <span aria-hidden='true'>🐾</span></h2>{ /* What: Call-To-Action Title Heading Element. Why: The page closes on an invitation. How: This shows it, ending in a paw print hidden from screen readers. */ }

						<p className={ cssModObj.ctaTexPar }>{ /* What: Call-To-Action Text Paragraph Element. Why: A short line says how to keep up. How: This shows it under the heading. */ }
							Hit follow, turn on notifications, and become part of The Bernie Bears community.
							New content is always just around the corner!
						</p>


					</div>


				</section>


			</div>


		</>


	);


}

// #endregion LinPagCom

// #endregion Components



// #region Exports

export { LinPagCom }; // What: Named Exports. Why: The Social Links route renders this page. How: This exports LinPagCom.

// #endregion Exports


