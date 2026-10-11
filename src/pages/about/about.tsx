


// #region Imports

import cssModObj from './about.module.css'; // What: CSS Module Object. Why: The About page is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this object.
import groJpgUrl from './group-photo.jpg';  // What: Group JPG URL. Why: The story sits beside a cartoon of both girls, and Vite fingerprints and checks an imported image. How: This imports the picture's built URL for the story's img.
import lilJpgUrl from './lilah.jpg';        // What: Lilah JPG URL. Why: Lilah's card shows her photo, and Vite fingerprints and checks an imported image. How: This imports the photo's built URL for her card's img.
import norJpgUrl from './norah.jpg';        // What: Norah JPG URL. Why: Norah's card shows her photo, and Vite fingerprints and checks an imported image. How: This imports the photo's built URL for her card's img.

// #endregion Imports



/**
 * about.tsx = About
 *
 * @summary
 * The About page: a header, the story of The Bernie Bears beside a cartoon of
 * both girls, a row of paw prints, a card for each sister with her photo,
 * description, and three traits, and a grid of fun facts on a gradient band.
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

// #region FUN_FAC_ARR

/**
 * FUN_FAC_ARR = Fun Fact Array
 *
 * @summary
 * The six fun facts, in the order the grid shows them. Every row shares the
 * same shape, so its fields carry no comments of their own:
 * - `facStr` (String): Fact String, the fact itself, shown large.
 * - `icoStr` (String): Icon String, the fact's decorative emoji.
 * - `labStr` (String): Label String, what the fact is about, shown small.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/

const FUN_FAC_ARR = [ // What: Fun Fact Array. Why: The page closes on six quick facts about the girls. How: Each row holds a fact's emoji, value, and label, rendered in this order.


	{ facStr : 'Bernese Mountain Dogs', icoStr : '🐕', labStr : 'Breed'          }, // What: Breed Fact Row. Why: Visitors want to know what kind of dogs they are. How: This names the breed.
	{ facStr : 'Sisters',               icoStr : '👭', labStr : 'Relationship'   }, // What: Relationship Fact Row. Why: The two are family. How: This calls them sisters.
	{ facStr : 'Silly & Heartfelt',     icoStr : '🎬', labStr : 'Content Style'  }, // What: Content Style Fact Row. Why: Visitors want to know what the posts are like. How: This sums up their style.
	{ facStr : 'All Ages Welcome',      icoStr : '🌍', labStr : 'Audience'       }, // What: Audience Fact Row. Why: Families follow along together. How: This welcomes every age.
	{ facStr : 'Costume Queens',        icoStr : '👗', labStr : 'Signature Move' }, // What: Signature Move Fact Row. Why: The costumes are what the girls are known for. How: This names them.
	{ facStr : 'Spreading Joy',         icoStr : '🩷', labStr : 'Mission'        }  // What: Mission Fact Row. Why: The facts close on why the girls post at all. How: This names their mission.


];

// #endregion FUN_FAC_ARR

// #endregion Constants



// #region Components

// #region AboPagCom

/**
 * AboPagCom = About Page Component
 *
 * @summary
 * Renders the About page: the header, the story beside the cartoon of both
 * girls, a row of paw prints, Lilah's and Norah's cards, and the fun facts
 * from FUN_FAC_ARR. Every emoji is hidden from screen readers as decoration,
 * each trait's inside a span of its own, which the stylesheet's chip rule
 * leaves alone since it styles only a trait's outer span.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The About page's wrapper div.
 *
 * @example
 * ```tsx
 * AboPagCom() // => <AboPagCom />
 * ```
 *
*/

function AboPagCom () : React.JSX.Element {


	return (


		<div className={ cssModObj.pageEnter }>{ /* What: About Page Div Element. Why: The About page fades up into place like every other page. How: This holds the page's sections. */ }


			<section className={ cssModObj.pageHeader }>{ /* What: Page Header Section Element. Why: The page opens with its title. How: This holds the heading and a short line under it. */ }


				<h1 className={ cssModObj.pageHeaderTitle }>Meet the Girls</h1>{ /* What: Page Header Heading Element. Why: The page's heading says who it's about. How: This names the page. */ }

				<p className={ cssModObj.pageHeaderSub }>Two sisters. One big fluffy adventure.</p>{ /* What: Page Header Paragraph Element. Why: A short line sets the tone. How: This shows it under the heading. */ }


			</section>



			<section className={ cssModObj.aboutIntro }>{ /* What: About Intro Section Element. Why: The story comes first. How: This sets the story beside the cartoon of both girls. */ }


				<div>{ /* What: About Intro Text Div Element. Why: The story reads as one column. How: This stacks its heading and two paragraphs, with no styling of its own. */ }


					<h2 className={ cssModObj.aboutIntroTitle }>The Bernie Bears Story</h2>{ /* What: About Intro Heading Element. Why: The story needs a heading. How: This names it. */ }

					<p className={ cssModObj.aboutIntroCopy }>{ /* What: Story Start Paragraph Element. Why: The story begins with why The Bernie Bears exists. How: This tells how it started. */ }
						The Bernie Bears started with a simple idea: share the joy that Lilah and Norah
						bring every single day. These two Bernese Mountain Dog sisters have a gift for making
						people smile, whether they're dressed up in adorable outfits, romping through the snow,
						or just being their big, lovable selves.
					</p>

					<p className={ cssModObj.aboutIntroCopy }>{ /* What: Story Community Paragraph Element. Why: The story ends with the community it grew into. How: This tells how it grew and welcomes the reader. */ }
						What began as a fun way to share family moments quickly grew into a community of
						fellow dog lovers, Bernie fans, and anyone who just needs a little more fluff in
						their day. We're so glad you're here!
					</p>


				</div>


				<div className={ cssModObj.aboutIntroImg }>{ /* What: About Intro Image Div Element. Why: The cartoon sits beside the story. How: This centers its frame. */ }


					<div className={ cssModObj.imgCardPlaceholder }>{ /* What: Image Card Div Element. Why: The cartoon sits in a rounded card. How: This frames the image. */ }


						<img
							className={ cssModObj.groupPhoto }

							src={ groJpgUrl }

							alt='Cartoonized picture of The Bernie Bears, both Lilah and Norah'
						/>{ /* What: Group Photo Image Element. Why: The story is about both girls. How: This loads the cartoon of the two of them. */ }


					</div>


				</div>


			</section>



			<div
				className={ cssModObj.pawDivider }

				aria-hidden='true'
			>🐾 🐾 🐾</div>{ /* What: Paw Divider Div Element. Why: A row of paw prints separates the story from the girls' cards. How: This shows three paws, hidden from screen readers as decoration. */ }



			<section className={ cssModObj.meetTheGirls }>{ /* What: Meet The Girls Section Element. Why: Each sister gets a card of her own. How: This holds the heading and both cards. */ }


				<h2 className={ cssModObj.sectionTitle }>Meet Lilah & Norah</h2>{ /* What: Section Title Heading Element. Why: The cards need a heading. How: This names the section. */ }



				<div className={ cssModObj.dogCards }>{ /* What: Dog Cards Div Element. Why: The two cards sit side by side on wide screens. How: This lays them out. */ }


					<div className={` ${ cssModObj.dogCard }   ${ cssModObj.dogCardLilah } `}>{ /* What: Lilah Dog Card Div Element. Why: Lilah gets a card of her own. How: This sets her photo beside her details, with her own accent. */ }


						<div>{ /* What: Dog Card Image Div Element. Why: The photo has its own row. How: This holds its round frame, with no styling of its own. */ }


							<div className={ cssModObj.imgPlaceholderRound }>{ /* What: Image Round Div Element. Why: Each sister's photo sits in a round frame. How: This frames the image. */ }


								<img
									className={ cssModObj.lilahPhoto }

									src={ lilJpgUrl }

									alt='Picture of Lilah, the older sister'
								/>{ /* What: Lilah Photo Image Element. Why: Lilah's card shows her. How: This loads her photo. */ }


							</div>


						</div>


						<div>{ /* What: Dog Card Content Div Element. Why: The details read as one column. How: This stacks the badge, name, description, and traits, with no styling of its own. */ }


							<div className={ cssModObj.dogBadge }>The Older Sister</div>{ /* What: Dog Badge Div Element. Why: The badge says where Lilah stands in the family. How: This shows it above her name. */ }

							<h3 className={ cssModObj.dogCardName }>Lilah</h3>{ /* What: Dog Card Heading Element. Why: The card is named for Lilah. How: This shows her name. */ }

							<p className={ cssModObj.dogCardText }>{ /* What: Dog Card Paragraph Element. Why: The card describes Lilah's personality. How: This shows a short paragraph. */ }
								Lilah is the first-born bear and she owns the title with grace and flair.
								She loves being the center of attention and has mastered the art of the
								perfect pose, whether it's for a silly video or a heartfelt moment. Lilah
								is the one who sets the tone, and her little sister Norah always follows her lead.
							</p>

							<div className={ cssModObj.dogTraits }>{ /* What: Dog Traits Div Element. Why: Three traits sum Lilah up at a glance. How: This sets them in a wrapping row of chips. */ }


								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>🎀</span> Fashion forward</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }

								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>📸</span> Natural model</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }

								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>💕</span> Total sweetheart</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }


							</div>


						</div>


					</div>



					<div className={` ${ cssModObj.dogCard }   ${ cssModObj.dogCardNorah } `}>{ /* What: Norah Dog Card Div Element. Why: Norah gets a card of her own. How: This sets her photo beside her details, with her own accent. */ }


						<div>{ /* What: Dog Card Image Div Element. Why: The photo has its own row. How: This holds its round frame, with no styling of its own. */ }


							<div className={ cssModObj.imgPlaceholderRound }>{ /* What: Image Round Div Element. Why: Each sister's photo sits in a round frame. How: This frames the image. */ }


								<img
									className={ cssModObj.norahPhoto }

									src={ norJpgUrl }

									alt='Picture of Norah, the younger sister'
								/>{ /* What: Norah Photo Image Element. Why: Norah's card shows her. How: This loads her photo. */ }


							</div>


						</div>


						<div>{ /* What: Dog Card Content Div Element. Why: The details read as one column. How: This stacks the badge, name, description, and traits, with no styling of its own. */ }


							<div className={` ${ cssModObj.dogBadge }   ${ cssModObj.dogBadgeNorah } `}>The Little Sister</div>{ /* What: Norah Dog Badge Div Element. Why: The badge says where Norah stands in the family. How: This shows it above her name, in her own accent. */ }

							<h3 className={ cssModObj.dogCardName }>Norah</h3>{ /* What: Dog Card Heading Element. Why: The card is named for Norah. How: This shows her name. */ }

							<p className={ cssModObj.dogCardText }>{ /* What: Dog Card Paragraph Element. Why: The card describes Norah's personality. How: This shows a short paragraph. */ }
								Norah may be the younger sibling, but she has just as much personality packed
								into her fluffy frame. She's playful, goofy, and loves to steal the spotlight
								just when you least expect it. Norah brings the chaos, the comedy, and all of
								the heart to every Bernie Bears moment.
							</p>

							<div className={ cssModObj.dogTraits }>{ /* What: Dog Traits Div Element. Why: Three traits sum Norah up at a glance. How: This sets them in a wrapping row of chips. */ }


								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>😂</span> Class clown</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }

								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>🏃</span> Always zooming</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }

								<span className={ cssModObj.dogTrait }><span aria-hidden='true'>🐾</span> Trouble maker</span>{ /* What: Dog Trait Span Element. Why: Each trait is a chip. How: This shows one, its emoji hidden from screen readers. */ }


							</div>


						</div>


					</div>


				</div>


			</section>



			<section className={ cssModObj.funFacts }>{ /* What: Fun Facts Section Element. Why: The page closes on quick facts about the girls. How: This holds them on a gradient band. */ }


				<div className={ cssModObj.container }>{ /* What: Fun Facts Container Div Element. Why: The facts sit in the page's centered column. How: This holds the heading and the grid. */ }


					<h2 className={ cssModObj.funFactsTitle }>Fun Facts</h2>{ /* What: Fun Facts Heading Element. Why: The facts need a heading that reads on the gradient. How: This names them in white. */ }


					<div className={ cssModObj.factsGrid }>{ /* What: Facts Grid Div Element. Why: The facts sit in a grid that wraps on narrow screens. How: This lays them out. */ }


						{ FUN_FAC_ARR.map( ( funFacObj ) => ( // What: Fun Fact Map. Why: Each row of FUN_FAC_ARR gets a card. How: This renders one card per row.


							<div
								key={ funFacObj.labStr }

								className={ cssModObj.factCard }
							>{ /* What: Fact Card Div Element. Why: Each fact is a card. How: This stacks the fact's emoji, value, and label. */ }


								<span
									className={ cssModObj.factIcon }

									aria-hidden='true'
								>{ funFacObj.icoStr }</span>{ /* What: Fact Icon Span Element. Why: Each fact opens with an emoji. How: This shows the row's emoji, hidden from screen readers as decoration. */ }

								<span className={ cssModObj.factValue }>{ funFacObj.facStr }</span>{ /* What: Fact Value Span Element. Why: The fact itself is the card's focus. How: This shows the row's fact. */ }

								<span className={ cssModObj.factLabel }>{ funFacObj.labStr }</span>{ /* What: Fact Label Span Element. Why: Each fact says what it's about. How: This shows the row's label under the fact. */ }


							</div>


						))}


					</div>


				</div>


			</section>


		</div>


	);


}

// #endregion AboPagCom

// #endregion Components



// #region Exports

export { AboPagCom }; // What: Named Exports. Why: The About route renders this page. How: This exports AboPagCom.

// #endregion Exports


