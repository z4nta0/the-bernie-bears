


// #region Imports

import cssModObj from './nav.module.css'; // What: CSS Module Object. Why: The bar is styled in its own module, whose class names Vite hashes. How: Each class an element carries is read from this object.


import { NavLink     } from 'react-router';         // What: Navigation Link. Why: The bar's links move between routes without a full page load, and the one for the current page is marked. How: This renders each link and sets aria-current on it while its route matches.
import { SOC_PRO_ARR } from './social-profiles.ts'; // What: Social Profile Array. Why: The phone menu shows a row of the girls' profiles. How: This imports the rows the Social Links page reads too.
import { useEffect   } from 'react';                // What: Use Effect. Why: The open menu locks the page behind it and listens for Escape and resizing. How: This applies those while the menu is open and removes them after.
import { useRef      } from 'react';                // What: Use Ref. Why: The menu's effect needs the bar, the scrim, and the toggle themselves. How: This attaches a reference to each.
import { useState    } from 'react';                // What: Use State. Why: The phone menu opens and closes from the toggle. How: This holds whether it's open.

// #endregion Imports



/**
 * nav.tsx = Navigation Bar
 *
 * @summary
 * The site's sticky top bar: the brand, which returns to the home page, a link
 * to each page, and a toggle that opens those links as a menu at 640px wide
 * and below, where the menu also offers extras for following the girls, such
 * as their social profiles, over a dimmed page. The link for the current page
 * is marked. It's led by a skip link, the page's first stop, that jumps a
 * keyboard user past the bar to the main content.
 *
 * Sections:
 *  - Constants
 *  - Helpers
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Constants

const NAV_LIN_ARR = [ // What: Navigation Link Array. Why: The bar links to the site's main pages, in a set order. How: Each row names a page's path and the link's label.


	{ labStr : 'Home',         patStr : '/'        }, // What: Home Link Row. Why: The home page is where a visitor starts. How: This links to the root path.
	{ labStr : 'About',        patStr : '/about'   }, // What: About Link Row. Why: Visitors want to meet the girls. How: This links to the About page.
	{ labStr : 'Social Links', patStr : '/links'   }, // What: Social Links Link Row. Why: Following the girls is the site's main purpose. How: This links to the Social Links page.
	{ labStr : 'Contact',      patStr : '/contact' }  // What: Contact Link Row. Why: The bar ends with the ways to get in touch. How: This links to the Contact page.


];

// #endregion Constants



// #region Helpers

// #region modCliFun

/**
 * modCliFun = Modified Click Function
 *
 * @summary
 * Whether a click on the skip link should be left to the browser: one made
 * with a modifier key held (Ctrl or Cmd to open a new tab, Shift for a new
 * window, Alt to download) or with any button but the main one. The skip
 * link's handler returns early when this is true, so the link's own address
 * opens the browser's own way.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param cliEveObj - Click Event Object: The skip link's click event.
 *
 * @returns Whether the browser should handle the click itself.
 * @see {@link modCliBoo}
 *
 * @example
 * ```ts
 * modCliFun(cliEveObj) // => false for a plain click
 * ```
 *
*/

function modCliFun ( cliEveObj : React.MouseEvent< HTMLAnchorElement > ) : boolean {


	const altKeyBoo = cliEveObj.altKey;       // What: Alt Key Boolean. Why: An Alt click is one the browser handles its own way. How: This reads whether Alt was held.
	const conKeyBoo = cliEveObj.ctrlKey;      // What: Control Key Boolean. Why: Ctrl-click opens a new tab elsewhere. How: This reads whether Ctrl was held.
	const metKeyBoo = cliEveObj.metaKey;      // What: Meta Key Boolean. Why: Cmd-click opens a new tab on a Mac. How: This reads whether Cmd was held.
	const othButBoo = cliEveObj.button !== 0; // What: Other Button Boolean. Why: A middle click opens a new tab. How: This checks the click wasn't made with the main button.
	const shiKeyBoo = cliEveObj.shiftKey;     // What: Shift Key Boolean. Why: Shift-click opens a new window. How: This reads whether Shift was held.

	const modCliBoo = metKeyBoo || conKeyBoo || shiKeyBoo || altKeyBoo || othButBoo; // What: Modified Click Boolean. Why: Any one of these means the visitor asked the browser to open the link its own way. How: This combines them.



	return modCliBoo; // What: Modified Click Return. Why: The link's handler decides from this whether to step aside. How: This hands back the combined answer.


}

// #endregion modCliFun

// #endregion Helpers



// #region Components

// #region NavBarCom

/**
 * NavBarCom = Navigation Bar Component
 *
 * @summary
 * Renders the bar. At 640px wide and below the links sit in a menu the toggle
 * opens, and choosing any link closes it, even one opening in a new tab; the
 * toggle reports the menu's state through aria-expanded and the menu carries
 * data-mobile-menu-open while open. React Router's NavLink marks the link
 * whose route matches with aria-current, which the bar's stylesheet styles,
 * and the "Home" link matches only the root path exactly, since every path
 * starts with it.
 *
 * A skip link comes first, waiting above the screen until it's focused, and
 * its plain click focuses the main element without putting #main in the
 * address, leaving a Ctrl, Cmd, Shift, or Alt click to the browser.
 *
 * The brand's paw print is hidden from screen readers as decoration, so the
 * link is announced by the name alone, and the links sit in a navigation
 * landmark labelled "Main", so screen readers can tell it from the footer's.
 *
 * At those widths the open menu also shows extras for following the girls,
 * such as a row of their six profiles, arriving as one block a stagger step
 * after the last link, over a scrim that dims the page. While it's open the
 * rest of the page is inert, so keyboard and screen reader users stay in the
 * bar; tapping the scrim closes it, Escape closes it and returns focus to the
 * toggle, and a screen widened past the phone layout closes it, since its
 * toggle is gone.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The skip link, the scrim, and the bar's header element.
 *
 * @example
 * ```tsx
 * NavBarCom() // => <NavBarCom />
 * ```
 *
*/

function NavBarCom () : React.JSX.Element {


	const [ menOpeBoo, setMenOpeBoo ] = useState( false ); // What: Menu Open Boolean And Setter. Why: The phone menu opens and closes from its toggle. How: This holds whether it's open, starting closed.

	const navBarRef = useRef< HTMLElement >( null );       // What: Navigation Bar Reference. Why: The open menu leaves the bar usable while it makes the rest of the page inert. How: This attaches to the header element.
	const scrDivRef = useRef< HTMLDivElement >( null );    // What: Scrim Div Reference. Why: The scrim has to stay tappable while the page behind it is inert. How: This attaches to the scrim.
	const togButRef = useRef< HTMLButtonElement >( null ); // What: Toggle Button Reference. Why: Escape puts focus back on the toggle, and a hidden toggle means the menu no longer applies. How: This attaches to the toggle.



	const cloMenFun = () => setMenOpeBoo( false );                                                        // What: Close Menu Function. Why: The menu should get out of the way once a link is chosen, however the link opens. How: This closes it.
	const auxCloFun = ( auxEveObj : React.MouseEvent ) => { if ( auxEveObj.button === 1 ) cloMenFun(); }; // What: Auxiliary Close Function. Why: A middle click opens a link in a new tab through the auxclick event, which no click handler sees. How: This closes the menu when the middle button sent it.



	useEffect( () => { // What: Open Menu Effect. Why: The open menu sits over a dimmed page, so keyboard and screen reader users should stay in the bar until it closes, and it needs the usual ways out. How: While the menu is open, this makes the bar's siblings inert and listens for Escape and resizing, and its cleanup undoes both.


		if ( !menOpeBoo ) return; // What: Closed Menu Guard. Why: Only the open menu changes the rest of the page. How: This leaves everything alone while the menu is closed.



		const navBarEle = navBarRef.current!; // What: Navigation Bar Element. Why: The bar stays usable. How: This reads the bar. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the bar has mounted.
		const scrDivEle = scrDivRef.current!; // What: Scrim Div Element. Why: The scrim stays tappable to close the menu. How: This reads the scrim. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the scrim has mounted.
		const sibEleArr = Array.from( navBarEle.parentElement!.children ).filter( ( sibCurEle ) => sibCurEle !== navBarEle && sibCurEle !== scrDivEle ); // What: Sibling Element Array. Why: The skip link, the page's main content, and the footer sit beside the bar. How: This lists the bar's siblings, leaving out the scrim. // What: Non-Null Note. Why: TypeScript can't see the bar has a parent. How: The app root always renders it inside its wrapper.
		const togButEle = togButRef.current!; // What: Toggle Button Element. Why: Escape returns focus here, and its visibility says whether the menu still applies. How: This reads the toggle. // What: Non-Null Note. Why: TypeScript can't see the ref is attached. How: Effects run after the toggle has mounted.


		const onKeyDowFun = ( keyEveObj : KeyboardEvent ) => { // What: On Key Down Function. Why: Escape is the expected way out of a layer over the page. How: This closes the menu and puts focus back on the toggle when Escape is pressed.


			if ( keyEveObj.key !== 'Escape' ) return; // What: Escape Key Guard. Why: This handler acts only on Escape. How: This ignores every other key.



			setMenOpeBoo( false ); // What: Menu Close Call. Why: Escape closes the menu. How: This sets the menu state to closed.

			togButEle.focus(); // What: Toggle Focus Call. Why: Focus would otherwise be left inside the closing menu. How: This moves it to the toggle, where the visitor opened the menu.


		};



		const onResWinFun = () => { if ( !togButEle.getClientRects().length ) setMenOpeBoo( false ); }; // What: On Resize Window Function. Why: A screen widened past the phone layout hides the toggle, which would leave the page inert with no way to close the menu. How: This closes the menu once the toggle has no box.


		for ( const sibCurEle of sibEleArr ) sibCurEle.setAttribute( 'inert', '' ); // What: Sibling Inert Loop. Why: Content under the scrim shouldn't take focus or be read while the menu is open. How: This marks each sibling inert, removing it from the tab order and the accessibility tree.



		document.addEventListener( 'keydown', onKeyDowFun ); // What: Key Down Listener Registration. Why: Escape should close the menu wherever focus is. How: This listens on the whole document.
		window.addEventListener( 'resize', onResWinFun );    // What: Resize Listener Registration. Why: Widening the screen can hide the toggle. How: This rechecks on every resize.



		return () => { // What: Open Menu Cleanup. Why: Closing the menu gives the page back. How: This removes the inert marks and both listeners.


			for ( const sibCurEle of sibEleArr ) sibCurEle.removeAttribute( 'inert' ); // What: Sibling Restore Loop. Why: The page has to be usable again once the menu closes. How: This removes each sibling's inert mark.



			document.removeEventListener( 'keydown', onKeyDowFun ); // What: Key Down Listener Cleanup. Why: Escape should do nothing once the menu is closed. How: This removes the listener.
			window.removeEventListener( 'resize', onResWinFun );    // What: Resize Listener Cleanup. Why: Resizing doesn't matter once the menu is closed. How: This removes the listener.


		};


	}, [ menOpeBoo ] ); // What: Effect Dependency Array. Why: The page's inert state and the listeners have to follow the menu opening and closing. How: menOpeBoo changing reruns the effect, which applies them while it's true and its cleanup removes them.



	return (


		<>{ /* What: Navigation Fragment. Why: The skip link, the scrim, and the bar render together, the skip link first so it's the page's first stop, then the scrim. How: This groups them without adding a wrapper element. */ }


			<a
				className={ cssModObj.navSkiAnc }

				href='#main'

				onClick={ ( cliEveObj ) => { // What: Skip Click Handler. Why: The jump should land in the page's content without leaving a hash in the address. How: This leaves a modified click to the browser, and otherwise cancels the default and focuses the main element.


					if ( modCliFun( cliEveObj ) ) return; // What: Modified Click Guard. Why: A Ctrl, Cmd, Shift, or Alt click asks the browser to open the link its own way. How: This returns before the default is cancelled.



					cliEveObj.preventDefault(); // What: Default Prevent Call. Why: The browser's own jump would put #main in the address. How: This cancels it.

					document.getElementById( 'main' )?.focus(); // What: Main Focus Call. Why: Focus has to land past the bar, so the next Tab continues into the content. How: This focuses the page's main element, which also brings it into view.


				} }
			>Skip to main content</a>{ /* What: Navigation Skip Anchor Element. Why: A keyboard user shouldn't have to Tab through every link in the bar to reach the page. How: This is the page's first stop, waiting above the screen until it's focused, when it slides down over the bar's corner, and its click moves focus to the main element. */ }

			<div
				ref={ scrDivRef }

				className={ cssModObj.navScrDiv }

				data-mobile-menu-open={ menOpeBoo || undefined } // What: Mobile Menu Open Flag. Why: The scrim fades in only while the menu is open. How: This marks the scrim while menOpeBoo is true, and drops the attribute otherwise.

				aria-hidden='true'

				onClick={ cloMenFun }
			/>{ /* What: Navigation Scrim Div Element. Why: The open menu should stand apart from the dimmed page, and a tap anywhere on the page should close it. How: This covers the page under the bar at 640px wide and below, dimmed while the menu is open, closing the menu when tapped, and hidden from screen readers as decoration. */ }



			<header
				ref={ navBarRef }

				className={ cssModObj.navBarHed }
			>{ /* What: Navigation Bar Header Element. Why: Every page starts with the shared bar. How: This holds the bar, which sticks to the top of the screen. */ }


				<div className={ cssModObj.navInnDiv }>{ /* What: Navigation Inner Div Element. Why: The bar's content sits in the page's centered column. How: This lays out the brand and the links in a row above 640px wide, and the brand and the toggle in a row at 640px and below, where the links drop down as the menu. */ }


					<NavLink
						className={ cssModObj.navBraAnc }

						to='/'

						onAuxClick={ auxCloFun }
						onClick={ cloMenFun }
					>{ /* What: Navigation Brand Anchor Navigation Link. Why: The brand is the way back to the home page. How: This links to the root path and closes the phone menu on any click, a new tab's included, so the page isn't left inert behind an open menu. */ }


						<span
							className={ cssModObj.pawIcoSpa }

							aria-hidden='true'
						>🐾</span>{ /* What: Paw Icon Span Element. Why: A bouncing paw print opens the brand. How: This shows the paw, hidden from screen readers as decoration. */ }

						<span className={ cssModObj.braNamSpa }>The Bernie Bears</span>{ /* What: Brand Name Span Element. Why: The bar names the site. How: This shows the name beside the paw. */ }


					</NavLink>



					<button
						ref={ togButRef }

						className={ cssModObj.navTogBut }

						type='button'

						aria-expanded={ menOpeBoo }
						aria-label='Toggle menu'

						onClick={ () => setMenOpeBoo( ( preOpeBoo ) => !preOpeBoo ) }
					>{ /* What: Navigation Toggle Button Element. Why: At 640px wide and below the links sit in a menu. How: This opens or closes it, tells screen readers whether it's open through aria-expanded, and turns its three bars into a cross while it is. */ }


						<span className={ cssModObj.togBarSpa } />{ /* What: Toggle Bar Span Element. Why: The toggle draws as three bars. How: This is the top bar. */ }

						<span className={ cssModObj.togBarSpa } />{ /* What: Toggle Bar Span Element. Why: The toggle draws as three bars. How: This is the middle bar. */ }

						<span className={ cssModObj.togBarSpa } />{ /* What: Toggle Bar Span Element. Why: The toggle draws as three bars. How: This is the bottom bar. */ }


					</button>



					<nav
						className={ cssModObj.navLinNav }

						data-mobile-menu-open={ menOpeBoo || undefined } // What: Mobile Menu Open Flag. Why: On a phone the links show only while the menu is open. How: This marks the nav while menOpeBoo is true, and drops the attribute otherwise.

						aria-label='Main'
					>{ /* What: Navigation Links Nav Element. Why: The page links sit in a row above 640px wide and drop down as the menu at 640px and below, and the bar's navigation landmark needs a label to tell it from the footer's. How: This holds a link to each page, labelled "Main", shown at 640px wide and below only while it carries data-mobile-menu-open. */ }


						{ NAV_LIN_ARR.map( ( linRecObj, linIndNum ) => ( // What: Page Link Map. Why: Each page gets a link. How: This renders one link per row, with its place in the list.


							<NavLink
								key={ linRecObj.patStr }

								className={ cssModObj.navLinAnc }

								style={ { '--nav-ite-ind' : linIndNum } as React.CSSProperties } // What: Navigation Item Index. Why: The phone menu's rows fade in one after another. How: This hands each row its place, which the stylesheet multiplies into its delay. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The stylesheet reads this one by name.

								end={ linRecObj.patStr === '/' } // What: End Match Flag. Why: Every path starts with the root, so the "Home" link would otherwise be active on every page. How: This makes only the "Home" link match its path exactly.
								to={ linRecObj.patStr }

								onAuxClick={ auxCloFun }
								onClick={ cloMenFun }
							>{ /* What: Navigation Link Anchor Navigation Link. Why: Each link takes the visitor to its page. How: This routes to the row's path, carries aria-current there, and closes the phone menu on any click, a new tab's included. */ }
								{ linRecObj.labStr }
							</NavLink>


						))}



						<div
							className={ cssModObj.menConDiv }

							style={ { '--nav-ite-ind' : NAV_LIN_ARR.length } as React.CSSProperties } // What: Navigation Item Index. Why: The block fades in after the last link. How: This hands it the next place in the stagger. // What: Type Assertion Note. Why: React's style type doesn't list custom properties. How: The stylesheet reads this one by name.
						>{ /* What: Menu Contents Div Element. Why: A phone menu of four links alone felt bare, and following the girls is the site's purpose. How: This holds the eyebrow label, the profiles, the main site link, and the tagline under the links, shown only in the phone menu. */ }


							<p className={ cssModObj.menEyePar }>Follow Lilah & Norah</p>{ /* What: Menu Eyebrow Paragraph Element. Why: The icons need a word on what they're for. How: This labels them in small uppercase letters. */ }



							<div className={ cssModObj.menSocDiv }>{ /* What: Menu Social Div Element. Why: Each of the girls' profiles is one tap away from any page. How: This sets the six icons in one row, or two rows of three at 360px wide and below. */ }


								{ SOC_PRO_ARR.map( ( socProObj ) => ( // What: Profile Icon Map. Why: Each profile gets an icon. How: This renders one link per row of SOC_PRO_ARR.


									<a
										key={ socProObj.plaStr }

										className={ cssModObj.menSocAnc }

										style={{
											background : socProObj.bacStr,
											color      : socProObj.colStr
										}}

										href={ socProObj.urlStr }
										rel='noopener'
										target='_blank'

										aria-label={ socProObj.plaStr }

										onAuxClick={ auxCloFun }
										onClick={ cloMenFun }
									>{ /* What: Menu Social Anchor Element. Why: Each profile should be recognizable at a glance. How: This shows the platform's mark in its brand color on its pale tint, named by the platform for screen readers, opening the profile in a new tab without giving it access to this one, and closes the menu. */ }


										<svg
											className={ cssModObj.menSocSvg }

											fill='currentColor'
											height='1em'
											viewBox='0 0 24 24'
											width='1em'

											aria-hidden='true'
										>{ /* What: Menu Social SVG Element. Why: The platform's mark stays sharp at any size. How: This draws the row's path at the tile's font size, hidden from screen readers since the link is named. */ }


											<path d={ socProObj.icoStr } />{ /* What: Menu Social Icon Path Element. Why: The mark is one path. How: This draws the row's path data. */ }


										</svg>


									</a>


								))}


							</div>



							<a
								className={ cssModObj.menOffAnc }

								href='https://theberniebears.com/'
								rel='noopener'
								target='_blank'

								onAuxClick={ auxCloFun }
								onClick={ cloMenFun }
							>Visit the Official Site<span className={ cssModObj.arrIcoSpa } aria-hidden='true'>→</span></a>{ /* What: Menu Official Anchor Element. Why: This site exists to send visitors to the brand's main site. How: This opens it in a new tab and closes the menu, its arrow hidden from screen readers. */ }

							<p className={ cssModObj.menTagPar }>Lilah & Norah: spreading joy, bear hugs & fluffy paws one day at a time</p>{ /* What: Menu Tagline Paragraph Element. Why: The menu ends on the girls' motto, as the footer does. How: This shows it small and quiet. */ }


						</div>


					</nav>


				</div>


			</header>


		</>


	);


}

// #endregion NavBarCom

// #endregion Components



// #region Exports

export { NavBarCom }; // What: Named Export. Why: The app root renders the bar above the routes. How: This exports NavBarCom.

// #endregion Exports


