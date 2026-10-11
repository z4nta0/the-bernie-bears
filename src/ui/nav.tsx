


// #region Imports

import { NavLink  } from 'react-router'; // What: Navigation Link. Why: The bar's links move between routes without a full page load, and the one for the current page is marked. How: This renders each link and sets aria-current on it while its route matches.
import { useState } from 'react';        // What: Use State. Why: The phone menu opens and closes from the toggle. How: This holds whether it's open.


import './nav.css'; // What: Navigation Stylesheet Import. Why: The bar's own styles live beside it. How: This is imported purely for its side effect, adding its rules to the page.

// #endregion Imports



/**
 * nav.tsx = Navigation Bar
 *
 * @summary
 * The site's sticky top bar: the brand, which returns to the home page, a link
 * to each page, and a toggle that opens those links as a menu on a phone. The
 * link for the current page is marked. Every page renders it above its content.
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

const NAV_LIN_ARR = [ // What: Navigation Link Array. Why: The bar links to every page, in a set order. How: Each row names a page's path and the link's label.


	{ labStr : 'Home',         patStr : '/'        }, // What: Home Link Row. Why: The home page is where a visitor starts. How: This links to the root path.
	{ labStr : 'About',        patStr : '/about'   }, // What: About Link Row. Why: Visitors want to meet the girls. How: This links to the About page.
	{ labStr : 'Social Links', patStr : '/links'   }, // What: Social Links Link Row. Why: Following the girls is the site's main purpose. How: This links to the Social Links page.
	{ labStr : 'Contact',      patStr : '/contact' }  // What: Contact Link Row. Why: The bar ends with the ways to get in touch. How: This links to the Contact page.


];

// #endregion Constants



// #region Components

// #region NavBarCom

/**
 * NavBarCom = Navigation Bar Component
 *
 * @summary
 * Renders the bar. On a phone the links sit in a menu the toggle opens, and
 * choosing a link closes it; the toggle reports the menu's state through
 * aria-expanded and the menu carries data-mobile-menu-open while open. React
 * Router's NavLink marks the link whose route matches with aria-current,
 * which the bar's stylesheet styles, and the Home link matches only the root
 * path exactly, since every path starts with it.
 * The brand's paw print is hidden from screen readers as decoration, so the
 * link is announced by the name alone, and the links sit in a navigation
 * landmark labelled Main, so screen readers can tell it from the footer's.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The bar's header element.
 *
 * @example
 * ```tsx
 * NavBarCom() // => <NavBarCom />
 * ```
 *
*/

function NavBarCom () : React.JSX.Element {


	const [ menOpeBoo, setMenOpeBoo ] = useState( false ); // What: Menu Open Boolean And Setter. Why: The phone menu opens and closes from its toggle. How: This holds whether it's open, starting closed.



	return (


		<header className='navbar'>{ /* What: Navigation Bar Header Element. Why: Every page starts with the shared bar. How: This holds the bar, which sticks to the top of the screen. */ }


			<div className='navbar-inner container'>{ /* What: Navigation Bar Inner Div Element. Why: The bar's content sits in the page's centered column. How: This lays out the brand, the toggle, and the links in a row. */ }


				<NavLink
					className='navbar-logo'

					to='/'
				>{ /* What: Brand Navigation Link. Why: The brand is the way back to the home page. How: This links to the root path. */ }


					<span
						className='paw-icon'

						aria-hidden='true'
					>🐾</span>{ /* What: Paw Icon Span Element. Why: A bouncing paw print opens the brand. How: This shows the paw, hidden from screen readers as decoration. */ }

					<span className='logo-text'>The Bernie Bears</span>{ /* What: Logo Text Span Element. Why: The bar names the site. How: This shows the name beside the paw. */ }


				</NavLink>



				<button
					className='hamburger'

					type='button'

					aria-expanded={ menOpeBoo }
					aria-label='Toggle menu'

					onClick={ () => setMenOpeBoo( ( preOpeBoo ) => !preOpeBoo ) }
				>{ /* What: Hamburger Button Element. Why: On a phone the links sit in a menu. How: This opens or closes it, tells screen readers whether it's open through aria-expanded, and turns its three bars into a cross while it is. */ }


					<span />{ /* What: Hamburger Bar Span Element. Why: The toggle draws as three bars. How: This is one of them. */ }

					<span />{ /* What: Hamburger Bar Span Element. Why: The toggle draws as three bars. How: This is one of them. */ }

					<span />{ /* What: Hamburger Bar Span Element. Why: The toggle draws as three bars. How: This is one of them. */ }


				</button>

				<nav
					className='navbar-links'

					data-mobile-menu-open={ menOpeBoo || undefined } // What: Mobile Menu Open Flag. Why: On a phone the links show only while the menu is open. How: This marks the nav while menOpeBoo is true, and drops the attribute otherwise.

					aria-label='Main'
				>{ /* What: Navigation Bar Links Nav Element. Why: The page links sit in a row on wide screens and drop down as the menu on a phone, and the bar's navigation landmark needs a label to tell it from the footer's. How: This holds a link to each page, labelled Main, shown on a phone only while it carries data-mobile-menu-open. */ }


					{ NAV_LIN_ARR.map( ( linRecObj ) => ( // What: Page Link Map. Why: Each page gets a link. How: This renders one link per row.


						<NavLink
							key={ linRecObj.patStr }

							className='nav-link'

							end={ linRecObj.patStr === '/' } // What: End Match Flag. Why: Every path starts with the root, so the Home link would otherwise be active on every page. How: This makes only the Home link match its path exactly.
							to={ linRecObj.patStr }

							onClick={ () => setMenOpeBoo( false ) }
						>{ /* What: Navigation Link. Why: Each link takes the visitor to its page. How: This routes to the row's path, carries aria-current there, and closes the phone menu. */ }
							{ linRecObj.labStr }
						</NavLink>


					))}


				</nav>


			</div>


		</header>


	);


}

// #endregion NavBarCom

// #endregion Components



// #region Exports

export { NavBarCom }; // What: Named Exports. Why: Every page renders the bar above its content. How: This exports NavBarCom.

// #endregion Exports


