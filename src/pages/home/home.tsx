


// #region Imports

import cssModObj from './home.module.css';    // What: CSS Module Object. Why: The home page is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this object.
import porWebUrl from './portrait-both.webp'; // What: Portrait WebP URL. Why: The hero shows Lilah and Norah together, and Vite fingerprints and checks an imported image. How: This imports the photo's built URL for the hero's img.


import { Link        } from 'react-router';     // What: Link. Why: The hero and banner buttons move to other pages without a full page load. How: This renders each button as a router link.
import { PHO_SIZ_OBJ } from './photo-sizes.ts'; // What: Photo Sizes Object. Why: The portrait's img carries its intrinsic size, so the page doesn't shift while it loads. How: This looks up the portrait's width and height.

// #endregion Imports



/**
 * home.tsx = Home
 *
 * @summary
 * The home page: a hero introducing Lilah and Norah beside their portrait (the
 * portrait on top at 880px wide and below), a row of paw prints, four cards on
 * what life with the girls is like, and a banner sending visitors to the
 * Social Links page.
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

// #region FEA_CAR_ARR

/**
 * FEA_CAR_ARR = Feature Card Array
 *
 * @summary
 * The four cards on what life with the girls is like, in the order they show.
 * Every row shares the same shape, so its fields carry no comments of their
 * own:
 * - `desStr` (String): Description String, the card's sentence.
 * - `emoStr` (String): Emoji String, the card's decorative emoji.
 * - `titStr` (String): Title String, the card's heading.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const FEA_CAR_ARR = [ // What: Feature Card Array. Why: The home page sums up life with the girls in four cards. How: Each row holds a card's emoji, title, and sentence, rendered in this order.


	{ desStr : 'From costume adventures to comedic hijinks, Lilah and Norah never fail to entertain.', emoStr : '🎭', titStr : 'Fun & Silly Videos' }, // What: Silly Videos Card. Why: The girls' videos are a big part of what they share. How: This card leads the row.

	{ desStr : "Giving bear hugs is what Lilah & Norah do best, and they've got plenty to go around for everyone.", emoStr : '🐻', titStr : 'Bear Hugs' }, // What: Bear Hugs Card. Why: Bear hugs are the girls' signature. How: This card follows the videos.

	{ desStr : 'These girls take their wardrobe seriously. Bear ears? Bunny ears? Yes to all of it.', emoStr : '👗', titStr : 'Fabulous Outfits' }, // What: Fabulous Outfits Card. Why: The girls are known for their costumes. How: This card follows the bear hugs.

	{ desStr : 'Snow days, garden romps, and everything in between: life is better outside.', emoStr : '🌿', titStr : 'Outdoor Adventures' } // What: Outdoor Adventures Card. Why: Much of their content happens outside. How: This card closes the row.


];

// #endregion FEA_CAR_ARR

// #endregion Constants



// #region Components

// #region HomPagCom

/**
 * HomPagCom = Home Page Component
 *
 * @summary
 * Renders the home page: the hero with its welcome, the girls' names, a short
 * pitch, and buttons to the About and Social Links pages beside their portrait
 * and two floating name badges, the portrait moving above them at 880px wide
 * and below; a row of paw prints; the four cards from FEA_CAR_ARR; and a
 * banner linking to the Social Links page. Every emoji is hidden from screen
 * readers as decoration, and the banner's button is named by its words alone,
 * since wrapping its paw in a hidden span would trade the space before it for
 * the button's flex gap.
 *
 * It also sets the page's canonical address, which React moves into the
 * document head while the page is shown; its title and description are
 * index.html's own, while every other page shows its own title, and Social
 * Links its own description too.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The home page's canonical link and wrapper div.
 *
 * @example
 * ```tsx
 * HomPagCom() // => <HomPagCom />
 * ```
 *
*/

function HomPagCom () : React.JSX.Element {


	return (


		<>{ /* What: Home Page Fragment. Why: The page's head tags and its content render side by side. How: This groups them without adding an element. */ }


			<link
				href='https://theberniebears.dog/'
				rel='canonical'
			/>{ /* What: Canonical Link Element. Why: Netlify also serves the site at deploy preview and netlify.app addresses, which should all count as one page. How: React 19 moves this link into the document head while the page is shown. */ }



			<div className={ cssModObj.pagEntDiv }>{ /* What: Page Enter Div Element. Why: The home page fades up into place like every other page. How: This holds the page's sections. */ }


				<section className={ cssModObj.homHerSec }>{ /* What: Home Hero Section Element. Why: The home page opens by introducing the girls. How: This sets the words and the portrait side by side, stacking the portrait above the words at 880px wide and below. */ }


					<div>{ /* What: Hero Content Div Element. Why: The welcome reads as one column. How: This stacks the eyebrow, title, pitch, and buttons, with no styling of its own. */ }


						<p className={ cssModObj.herEyePar }>Welcome to the world of</p>{ /* What: Hero Eyebrow Paragraph Element. Why: A short line leads into the title. How: This shows it above the title. */ }

						<h1 className={ cssModObj.herTitHea }>The Bernie Bears</h1>{ /* What: Hero Title Heading Element. Why: The page's heading names the girls' brand. How: This shows it in the script font. */ }

						<p className={ cssModObj.herLedPar }>{ /* What: Hero Lede Paragraph Element. Why: A short pitch says who the girls are. How: This shows it under the title, ending in a paw print hidden from screen readers. */ }
							Meet Lilah & Norah, two adorable Bernese Mountain Dog sisters bringing
							laughter, love, bear hugs, and the occasional dramatic outfit to your feed. <span aria-hidden='true'>🐾</span>
						</p>

						<div className={ cssModObj.herActDiv }>{ /* What: Hero Actions Div Element. Why: The two main ways onward sit together. How: This sets the buttons in a row. */ }


							<Link
								className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncPrimary } `}

								to='/about'
							>Meet the Girls</Link>{ /* What: Meet The Girls Link. Why: Visitors want to know the girls first. How: This routes to the About page. */ }



							<Link
								className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncOutline } `}

								to='/links'
							>Follow Along</Link>{ /* What: Follow Along Link. Why: Following the girls is the site's main purpose. How: This routes to the Social Links page. */ }


						</div>


					</div>


					<div className={ cssModObj.herVisDiv }>{ /* What: Hero Visual Div Element. Why: The portrait sits on a soft blob with the girls' names floating beside it. How: This holds the blob, the framed portrait, and the two badges. */ }


						<div className={ cssModObj.herBloDiv } />{ /* What: Hero Blob Div Element. Why: A soft shape behind the portrait adds warmth. How: This draws a morphing blob. */ }

						<div className={ cssModObj.porFraDiv }>{ /* What: Portrait Frame Div Element. Why: The portrait sits in a rounded frame. How: This frames the image. */ }


							<img
								className={ cssModObj.porPhoIma }

								height={ PHO_SIZ_OBJ[ 'portrait-both' ].heiNum }
								src={ porWebUrl }
								width={ PHO_SIZ_OBJ[ 'portrait-both' ].widNum }

								alt='Lilah and Norah, the Bernie Bears'
							/>{ /* What: Portrait Photo Image Element. Why: The hero shows the girls together. How: This loads their portrait at its own width and height, so the frame doesn't shift when it arrives. */ }


						</div>

						<div className={` ${ cssModObj.floBadDiv }   ${ cssModObj.floBadDivLilah } `}><span aria-hidden='true'>🌸</span> Lilah</div>{ /* What: Floating Badge Div Element. Why: The badges name the girls in the portrait. How: This floats Lilah's name beside it, after a flower hidden from screen readers. */ }

						<div className={` ${ cssModObj.floBadDiv }   ${ cssModObj.floBadDivNorah } `}><span aria-hidden='true'>🌺</span> Norah</div>{ /* What: Floating Badge Div Element. Why: The badges name the girls in the portrait. How: This floats Norah's name beside it, half a cycle behind Lilah's, after a flower hidden from screen readers. */ }


					</div>


				</section>



				<div
					className={ cssModObj.pawDivDiv }

					aria-hidden='true'
				>🐾 🐾 🐾</div>{ /* What: Paw Divider Div Element. Why: A row of paw prints separates the hero from the cards. How: This shows three paws, hidden from screen readers as decoration. */ }



				<section className={ cssModObj.homFeaSec }>{ /* What: Home Features Section Element. Why: The page sums up life with the girls. How: This holds the heading, its subtitle, and the cards. */ }


					<h2 className={ cssModObj.secTitHea }>Life with the Bernie Bears</h2>{ /* What: Section Title Heading Element. Why: The cards need a heading. How: This names the section. */ }

					<p className={ cssModObj.secSubPar }>Every day is an adventure when you've got fluffy ears and a flair for drama</p>{ /* What: Section Subtitle Paragraph Element. Why: A short line sets up the cards. How: This shows it under the heading. */ }


					<div className={ cssModObj.feaGriDiv }>{ /* What: Features Grid Div Element. Why: The cards sit in a grid that wraps on narrow screens. How: This lays them out. */ }


						{ FEA_CAR_ARR.map( ( feaCarObj ) => ( // What: Feature Card Map. Why: Each row of FEA_CAR_ARR gets a card. How: This renders one card per row.


							<div
								key={ feaCarObj.titStr }

								className={ cssModObj.feaCarDiv }
							>{ /* What: Feature Card Div Element. Why: Each card sums up one part of life with the girls. How: This stacks the card's emoji, title, and sentence. */ }


								<div
									className={ cssModObj.feaEmoDiv }

									aria-hidden='true'
								>{ feaCarObj.emoStr }</div>{ /* What: Feature Emoji Div Element. Why: Each card opens with an emoji. How: This shows the row's emoji, hidden from screen readers as decoration. */ }

								<h3 className={ cssModObj.feaTitHea }>{ feaCarObj.titStr }</h3>{ /* What: Feature Title Heading Element. Why: Each card is named. How: This shows the row's title. */ }

								<p className={ cssModObj.feaTexPar }>{ feaCarObj.desStr }</p>{ /* What: Feature Text Paragraph Element. Why: Each card says a little more. How: This shows the row's sentence. */ }


							</div>


						))}


					</div>


				</section>



				<section className={ cssModObj.homCtaSec }>{ /* What: Home Call-To-Action Section Element. Why: The page ends by sending visitors to follow the girls. How: This holds the banner's heading, line, and button. */ }


					<div className={ cssModObj.ctaInnDiv }>{ /* What: Call-To-Action Inner Div Element. Why: The banner's content sits in the page's centered column. How: This holds the heading, line, and button. */ }


						<h2 className={ cssModObj.ctaTitHea }>Join the Bernie Bears family!</h2>{ /* What: Call-To-Action Title Heading Element. Why: The banner invites visitors to follow along. How: This shows the invitation. */ }

						<p className={ cssModObj.ctaTexPar }>Follow Lilah & Norah across all their favorite platforms and never miss a moment (or a bear hug).</p>{ /* What: Call-To-Action Text Paragraph Element. Why: A short line says why to follow. How: This shows it under the heading. */ }



						<Link
							className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncWhite } `}

							to='/links'

							aria-label='See All Social Links' // What: Social Links Button Label. Why: Screen readers would otherwise read the decorative paw aloud. How: This names the button by its words alone, which still match what's shown.
						>See All Social Links 🐾</Link>{ /* What: See All Social Links Link. Why: The banner's one action is following the girls. How: This routes to the Social Links page. */ }


					</div>


				</section>


			</div>


		</>


	);


}

// #endregion HomPagCom

// #endregion Components



// #region Exports

export { HomPagCom }; // What: Named Exports. Why: The home route renders this page. How: This exports HomPagCom.

// #endregion Exports


