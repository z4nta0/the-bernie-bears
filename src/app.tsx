


// #region Imports

import { AboPagCom    } from './pages/about/about.tsx';     // What: About Page Component. Why: The About route shows the girls' story. How: The about route renders it.
import { ConPagCom    } from './pages/contact/contact.tsx'; // What: Contact Page Component. Why: The Contact route shows the ways to get in touch. How: The contact route renders it.
import { HomPagCom    } from './pages/home/home.tsx';       // What: Home Page Component. Why: The site's root address is its home page. How: The home route renders it.
import { LinPagCom    } from './pages/links/links.tsx';     // What: Links Page Component. Why: The Social Links route lists every place to follow the girls. How: The links route renders it.
import { NavBarCom    } from './ui/nav.tsx';                // What: Navigation Bar Component. Why: Every page starts with the shared bar. How: This renders above the routes.
import { Route        } from 'react-router';                // What: Route. Why: Each page is matched to its path. How: This declares one route per page.
import { Routes       } from 'react-router';                // What: Routes. Why: Only one page should render for any path. How: This renders the first route whose path matches.
import { SitFooCom    } from './ui/footer.tsx';             // What: Site Footer Component. Why: Every page ends with the shared footer. How: This renders below the routes.
import { useScrTopFun } from './ui/scroll-top.ts';          // What: Use Scroll Top Function. Why: A new page should open at its top rather than where the last one was scrolled. How: The app root calls it once, and it scrolls on every link-driven navigation.

// #endregion Imports



/**
 * app.tsx = App
 *
 * @summary
 * The site's root component, mounted by main.tsx inside the router: the bar,
 * the main landmark holding whichever page the address matches, and the
 * footer, stacked in a column at least as tall as the screen so the footer
 * sits at the bottom of a short page. It also returns the window to the top
 * after each link-driven navigation. A new page is added as another route
 * here.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region AppRooCom

/**
 * AppRooCom = App Root Component
 *
 * @summary
 * The top of the component tree: renders the bar, the page the address
 * matches inside the main landmark, and the footer, so every page shares the
 * same frame. The main landmark grows to fill the column, which keeps the
 * footer at the bottom of the screen on a short page. It calls useScrTopFun
 * once, so every link-driven navigation opens the new page at its top.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The app's wrapper div.
 *
 * @example
 * ```tsx
 * AppRooCom() // => <AppRooCom />
 * ```
 *
*/

function AppRooCom () : React.JSX.Element {


	useScrTopFun(); // What: Scroll Top Call. Why: Every link to another page should open it at its top. How: This runs the hook once from the root, which stays mounted across every route.



	return (


		<div
			style={{
				display       : 'flex',
				flexDirection : 'column',
				minHeight     : '100vh',
				position      : 'relative',
				zIndex        : 1
			}}
		>{ /* What: App Wrapper Div Element. Why: The bar, the page, and the footer stack in one column at least as tall as the screen. How: This lays them out as a flex column, above any decoration the page draws behind it. */ }


			<NavBarCom />{ /* What: Navigation Bar Component. Why: Every page starts with the shared bar. How: This renders it above the page. */ }



			<main style={{ flex : 1 }}>{ /* What: App Main Element. Why: Each page's content is the main landmark, and it should fill the space between the bar and the footer. How: This holds whichever page the address matches and grows to fill the column. */ }


				<Routes>{ /* What: Page Routes. Why: Only one page should render for any path. How: This renders the first route below whose path matches. */ }


					<Route
						element={ <HomPagCom /> }
						path='/'
					/>{ /* What: Home Route. Why: The site's root address is its home page. How: This renders HomPagCom at the root path. */ }



					<Route
						element={ <AboPagCom /> }
						path='/about'
					/>{ /* What: About Route. Why: The girls' story has its own page. How: This renders AboPagCom at /about. */ }



					<Route
						element={ <LinPagCom /> }
						path='/links'
					/>{ /* What: Social Links Route. Why: Every place to follow the girls has its own page. How: This renders LinPagCom at /links. */ }



					<Route
						element={ <ConPagCom /> }
						path='/contact'
					/>{ /* What: Contact Route. Why: The ways to get in touch have their own page. How: This renders ConPagCom at /contact. */ }


				</Routes>


			</main>



			<SitFooCom />{ /* What: Site Footer Component. Why: Every page ends with the shared footer. How: This renders it below the page. */ }


		</div>


	);


}

// #endregion AppRooCom

// #endregion Components



// #region Exports

export { AppRooCom }; // What: Named Exports. Why: main.tsx is the sole consumer, mounting this as the site's root. How: This exports AppRooCom.

// #endregion Exports


