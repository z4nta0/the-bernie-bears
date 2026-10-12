


// #region Imports

import cssModObj from './not-found.module.css'; // What: CSS Module Object. Why: The 404 page is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this object.


import { Link } from 'react-router'; // What: Link. Why: The page's buttons move to other pages without a full page load. How: This renders each one as a router link.

// #endregion Imports



/**
 * not-found.tsx = Not Found
 *
 * @summary
 * The page every unknown address lands on: the gradient header the other
 * pages open with, holding a heading saying the page wasn't found, a short
 * line in the girls' voice, and two ways onward, home and the Social Links
 * page, the site's main action. It names itself in the tab and asks search
 * engines not to index it, since the host answers every unknown address with
 * this page and a 200 status. The bar and footer around it come from app.tsx.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region NotFouCom

/**
 * NotFouCom = Not Found Component
 *
 * @summary
 * Renders the 404 page's title and its noindex robots tag, which React moves
 * into the document head, and its header under the page's one h1, with a
 * Back Home button and a Follow Along button to the Social Links page. The
 * paw print closing the line is hidden from screen readers as decoration.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The 404 page's title, robots tag, and wrapper div.
 *
 * @example
 * ```tsx
 * NotFouCom() // => <NotFouCom />
 * ```
 *
*/

function NotFouCom () : React.JSX.Element {


	return (


		<>{ /* What: Not Found Fragment. Why: The page's head tags and its content render side by side. How: This groups them without adding an element. */ }


			<title>Page Not Found | The Bernie Bears</title>{ /* What: Page Title Element. Why: A visitor's tab and history should say the address they tried doesn't exist. How: React 19 moves this title into the document head while the page is shown. */ }

			<meta
				name='robots'

				content='noindex'
			/>{ /* What: Robots Meta Element. Why: The host answers every unknown path with the site and a 200 status, so search engines would otherwise index this page under every mistyped address. How: React 19 moves this tag into the document head while the page is shown. */ }



			<div className={ cssModObj.pagEntDiv }>{ /* What: Page Enter Div Element. Why: The 404 page fades up into place like every other page. How: This holds the page's header. */ }


				<section className={ cssModObj.pagHeaSec }>{ /* What: Page Header Section Element. Why: The page opens with its title like every other page. How: This holds the heading, a short line, and the ways onward. */ }


					<h1 className={ cssModObj.pagTitHea }>Page Not Found</h1>{ /* What: Page Title Heading Element. Why: The heading says the address doesn't lead anywhere. How: This names what happened. */ }

					<p className={ cssModObj.pagSubPar }>Lilah & Norah sniffed everywhere, but this page has wandered off <span aria-hidden='true'>🐾</span></p>{ /* What: Page Subtitle Paragraph Element. Why: A short line keeps the girls' playful voice. How: This shows it under the heading, ending in a paw print hidden from screen readers. */ }

					<div className={ cssModObj.nofActDiv }>{ /* What: Not-Found Actions Div Element. Why: The visitor needs clear ways onward. How: This holds the two buttons, centered in a row that wraps. */ }


						<Link
							className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncPrimary } `}

							to='/'
						>Back Home</Link>{ /* What: Back Home Link. Why: Home is the natural place to start over. How: This returns to the home page. */ }




						<Link
							className={` ${ cssModObj.butBasAnc }   ${ cssModObj.butBasAncOutline } `}

							to='/links'
						>Follow Along</Link>{ /* What: Follow Along Link. Why: Following the girls is the site's main action. How: This opens the Social Links page. */ }


					</div>


				</section>


			</div>


		</>


	);


}

// #endregion NotFouCom

// #endregion Components



// #region Exports

export { NotFouCom }; // What: Named Exports. Why: The router renders the 404 page for every unknown address. How: This exports NotFouCom.

// #endregion Exports


