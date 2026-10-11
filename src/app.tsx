


// #region Imports

import { Route     } from 'react-router';                // What: Route. Why: Each page is matched to its path. How: This declares one route per page.
import { Routes    } from 'react-router';                // What: Routes. Why: Only one page should render for any path. How: This renders the first route whose path matches.
import { NavBarCom } from './ui/nav.tsx';                // What: Navigation Bar Component. Why: Every page starts with the shared bar. How: This renders above the routes. // What: Load Order Note. Why: Each component's file imports its own global stylesheet, so these imports set the order the stylesheets load in, and home.css and about.css both define .section-title, the later one winning on both pages. How: The components stay in the order they were first written in, rather than alphabetical, until step 8 moves every stylesheet into its own CSS module.
import { SitFooCom } from './ui/footer.tsx';             // What: Site Footer Component. Why: Every page ends with the shared footer. How: This renders below the routes. // What: Load Order Note. Why: The import order sets the order the global stylesheets load in. How: This keeps its place after the bar.
import { HomPagCom } from './pages/home/home.tsx';       // What: Home Page Component. Why: The site's root address is its home page. How: The home route renders it. // What: Load Order Note. Why: home.css has to load before about.css, whose .section-title margin has always won on both pages. How: This stays ahead of the About import.
import { AboPagCom } from './pages/about/about.tsx';     // What: About Page Component. Why: The About route shows the girls' story. How: The about route renders it. // What: Load Order Note. Why: about.css's .section-title margin has always won over home.css's on both pages. How: This stays after the Home import.
import { LinPagCom } from './pages/links/links.tsx';     // What: Links Page Component. Why: The Social Links route lists every place to follow the girls. How: The links route renders it. // What: Load Order Note. Why: The import order sets the order the global stylesheets load in. How: This keeps its place after the About import.
import { ConPagCom } from './pages/contact/contact.tsx'; // What: Contact Page Component. Why: The Contact route shows the ways to get in touch. How: The contact route renders it. // What: Load Order Note. Why: The import order sets the order the global stylesheets load in. How: This keeps its place last.

// #endregion Imports



/**
 * app.tsx = App
 *
 * @summary
 * The site's root component, mounted by main.tsx inside the router: the bar,
 * the main landmark holding whichever page the address matches, and the
 * footer, stacked in a column at least as tall as the screen so the footer
 * sits at the bottom of a short page. A new page is added as another route
 * here. The imports keep their original order rather than alphabetical, since
 * each page's file loads a global stylesheet and two of them define the same
 * class, until step 8 moves the styles into CSS modules.
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
 * footer at the bottom of the screen on a short page.
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


