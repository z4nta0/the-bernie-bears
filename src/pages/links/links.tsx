


// #region Imports

import './links.css'; // What: Links Stylesheet Import. Why: The Social Links page's own styles live beside it. How: This is imported purely for its side effect, adding its rules to the page.

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
 * shows them. Each icon is a 24 by 24 SVG path: the platforms' from Simple
 * Icons (CC0), the shop's a plain bag drawn for this page. Every row shares
 * the same shape, so its fields carry no comments of their own:
 * - `bacStr` (String): Background String, the icon tile's pale tint.
 * - `colStr` (String): Color String, the card's brand color, used for its
 *   stripe, icon, handle, and arrow.
 * - `desStr` (String): Description String, the card's sentence.
 * - `hanStr` (String): Handle String, the account name or address shown.
 * - `icoStr` (String): Icon String, the icon's SVG path data.
 * - `plaStr` (String): Platform String, the platform's name.
 * - `urlStr` (String): URL String, the page the card opens.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const SOC_LIN_ARR = [ // What: Social Link Array. Why: The page lists every place to follow the girls, plus the brand's shop. How: Each row holds a card's colors, text, icon, and address, rendered in this order.


	{ // What: Facebook Card. Why: The girls' home base comes first. How: This card links to the Facebook page.


		bacStr : '#e7f0fd',
		colStr : '#1877F2',
		hanStr : '@TheBernieBears',
		plaStr : 'Facebook',
		urlStr : 'https://www.facebook.com/theberniebears',

		desStr : 'Our home base! Join the community, watch videos, and keep up with all the latest bear adventures.',
		icoStr : 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'


	},

	{ // What: Instagram Card. Why: Photos and reels are the girls' everyday posts. How: This card links to the Instagram page.


		bacStr : '#fdeef3',
		colStr : '#E1306C',
		hanStr : '@theberniebears',
		plaStr : 'Instagram',
		urlStr : 'https://www.instagram.com/theberniebears',

		desStr : "Beautiful photos, reels, and behind-the-scenes moments from Lilah & Norah's daily life.",
		icoStr : 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077'


	},

	{ // What: YouTube Card. Why: The full-length videos live here. How: This card links to the YouTube page.


		bacStr : '#fff0f0',
		colStr : '#FF0000',
		hanStr : 'The Bernie Bears',
		plaStr : 'YouTube',
		urlStr : 'https://www.youtube.com/@theberniebears',

		desStr : 'Full-length videos, funny skits, seasonal specials, and heartfelt stories, all in one place.',
		icoStr : 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'


	},

	{ // What: TikTok Card. Why: Short clips reach the most new fans. How: This card links to the TikTok page.


		bacStr : '#f0f0f0',
		colStr : '#010101',
		hanStr : '@theberniebears',
		plaStr : 'TikTok',
		urlStr : 'https://www.tiktok.com/@theberniebears',

		desStr : 'Short clips, trending sounds and maximum fluff. For your daily dose of Bernie Bear chaos.',
		icoStr : 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z'


	},

	{ // What: X Card. Why: Quick updates go out here. How: This card links to the X page.


		bacStr : '#f0f0f0',
		colStr : '#000000',
		hanStr : '@theberniebears',
		plaStr : 'X',
		urlStr : 'https://x.com/theberniebears',

		desStr : 'Quick updates, photos, and the occasional bit of Bernie Bear commentary.',
		icoStr : 'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z'


	},

	{ // What: Pinterest Card. Why: Outfit ideas and cozy moments are saved here. How: This card links to the Pinterest page.


		bacStr : '#fdecee',
		colStr : '#BD081C',
		hanStr : '@theberniebears',
		plaStr : 'Pinterest',
		urlStr : 'https://www.pinterest.com/theberniebears/',

		desStr : 'Outfit ideas, cozy moments, and boards full of fluffy inspiration.',
		icoStr : 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z'


	},

	{ // What: Shop Card. Why: The brand's own store is where fans can support the girls, and this site exists to promote it. How: This card links to the main site's shop.


		bacStr : 'var( --accent-pale )', // Accent Pale = #ddeadc
		colStr : 'var( --accent )', // Accent = #8BAD89
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
 * --card-color custom property. The icons, the arrows, and the paw prints are
 * hidden from screen readers as decoration, so each card is announced by its
 * platform, handle, and sentence.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The Social Links page's wrapper div.
 *
 * @example
 * ```tsx
 * LinPagCom() // => <LinPagCom />
 * ```
 *
*/

function LinPagCom () : React.JSX.Element {


	return (


		<div className='social-links page-enter'>{ /* What: Social Links Page Div Element. Why: The Social Links page fades up into place like every other page. How: This holds the page's sections. */ }


			<section className='page-header'>{ /* What: Page Header Section Element. Why: The page opens with its title. How: This holds the heading and a short line under it. */ }


				<h1>Follow the Bears</h1>{ /* What: Page Header Heading Element. Why: The page's heading says what it's for. How: This names the page. */ }

				<p>Find Lilah & Norah on all their favorite platforms</p>{ /* What: Page Header Paragraph Element. Why: A short line says where to look. How: This shows it under the heading. */ }


			</section>


			<section className='links-section'>{ /* What: Links Section Element. Why: The cards are the page's content. How: This holds the intro line and the list of cards. */ }


				<p className='links-intro'>{ /* What: Links Intro Paragraph Element. Why: A short line says there's a place for every kind of fan. How: This shows it above the cards, ending in a paw print hidden from screen readers. */ }
					Whether you love long videos, quick clips, or scrolling through adorable photos,
					there's a place for every kind of Bernie Bears fan. <span aria-hidden='true'>🐾</span>
				</p>

				<div className='social-cards'>{ /* What: Social Cards Div Element. Why: The cards stack in one column. How: This lays them out. */ }


					{ SOC_LIN_ARR.map( ( socLinObj ) => ( // What: Social Link Map. Why: Each row of SOC_LIN_ARR gets a card. How: This renders one card per row.


						<a
							key={ socLinObj.plaStr }

							className='social-card'

							style={ { '--card-color' : socLinObj.colStr } as React.CSSProperties } // What: Card Color Property. Why: The stylesheet draws each card's left stripe in its brand color. How: This hands the row's color to the card's --card-color custom property. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The object holds only this one custom property, which React sets as written.

							href={ socLinObj.urlStr }
							rel='noopener'
							target='_blank'
						>{ /* What: Social Card Anchor Element. Why: Each card takes the visitor to one of the girls' pages, or the brand's shop. How: This opens the row's address in a new tab, without giving that page access to this one, while still letting its analytics see the visit came from this site. */ }


							<div
								className='social-card-icon'

								style={{
									background : socLinObj.bacStr,
									color      : socLinObj.colStr
								}}

								aria-hidden='true'
							>{ /* What: Social Card Icon Div Element. Why: Each card opens with its platform's icon on a pale tile. How: This tints the tile and sets the icon's color, hidden from screen readers as decoration. */ }


								<svg
									fill='currentColor'
									height='1em'
									viewBox='0 0 24 24'
									width='1em'
								>{ /* What: Social Card Icon SVG Element. Why: The platform's mark stays sharp at any size. How: This draws the row's path at the tile's font size, in the tile's color. */ }


									<path d={ socLinObj.icoStr } />{ /* What: Social Card Icon Path Element. Why: The mark is one path. How: This draws the row's path data. */ }


								</svg>


							</div>


							<div className='social-card-body'>{ /* What: Social Card Body Div Element. Why: The card's words read as one column. How: This stacks the platform, handle, and sentence. */ }


								<div className='social-platform'>{ socLinObj.plaStr }</div>{ /* What: Social Platform Div Element. Why: The card names its platform. How: This shows it in small capitals. */ }

								<div
									className='social-handle'

									style={{ color : socLinObj.colStr }}
								>{ socLinObj.hanStr }</div>{ /* What: Social Handle Div Element. Why: The card shows the account to look for. How: This shows the row's handle in its brand color. */ }

								<p className='social-desc'>{ socLinObj.desStr }</p>{ /* What: Social Description Paragraph Element. Why: The card says what's there. How: This shows the row's sentence. */ }


							</div>

							<div
								className='social-card-arrow'

								style={{ color : socLinObj.colStr }}

								aria-hidden='true'
							>→</div>{ /* What: Social Card Arrow Div Element. Why: An arrow shows the card leads somewhere. How: This shows it in the row's brand color, hidden from screen readers as decoration. */ }


						</a>


					))}


				</div>


			</section>



			<section className='social-cta'>{ /* What: Social Call To Action Section Element. Why: The page ends by asking visitors to follow along. How: This holds the closing heading and line. */ }


				<div className='container'>{ /* What: Social Call To Action Container Div Element. Why: The closing words sit in the page's centered column. How: This holds the heading and line. */ }


					<h2>Don't miss a thing! <span aria-hidden='true'>🐾</span></h2>{ /* What: Social Call To Action Heading Element. Why: The page closes on an invitation. How: This shows it, ending in a paw print hidden from screen readers. */ }

					<p>{ /* What: Social Call To Action Paragraph Element. Why: A short line says how to keep up. How: This shows it under the heading. */ }
						Hit follow, turn on notifications, and become part of The Bernie Bears community.
						New content is always just around the corner!
					</p>


				</div>


			</section>


		</div>


	);


}

// #endregion LinPagCom

// #endregion Components



// #region Exports

export { LinPagCom }; // What: Named Exports. Why: The Social Links route renders this page. How: This exports LinPagCom.

// #endregion Exports


