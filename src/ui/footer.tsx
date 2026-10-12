


// #region Imports

import cssModObj from './footer.module.css'; // What: CSS Module Object. Why: The footer is styled in its own module, whose class names Vite hashes. How: Every element reads its class from this object.


import { Link } from 'react-router'; // What: Link. Why: The footer's page links move between routes without a full page load. How: This renders each one as a router link.

// #endregion Imports



/**
 * footer.tsx = Footer
 *
 * @summary
 * The site's footer: the brand name with its tagline, a link to each page and
 * to the brand's main site, and a copyright line. It reads the current year
 * each time it renders, so the copyright never goes stale. Every page renders
 * it below its content.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region SitFooCom

/**
 * SitFooCom = Site Footer Component
 *
 * @summary
 * Renders the footer: the brand name and tagline, a link to each page and an
 * Official Site link to the brand's main site, which opens in a new tab
 * without giving it access to this one, in a navigation landmark labelled
 * Footer, so screen readers can tell it from the bar's, and the copyright with
 * the current year. The brand's paw print is hidden from screen readers as
 * decoration, while the copyright's heart is announced as love, since the line
 * says it was made with love.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The footer element.
 *
 * @example
 * ```tsx
 * SitFooCom() // => <SitFooCom />
 * ```
 *
*/

function SitFooCom () : React.JSX.Element {


	const curYeaNum = new Date().getFullYear(); // What: Current Year Number. Why: The copyright line names the current year. How: This reads it from today's date.



	return (


		<footer className={ cssModObj.sitFooFoo }>{ /* What: Site Footer Footer Element. Why: Every page ends with the brand, its page links, and the copyright. How: This holds the footer's single centered column. */ }


			<div className={ cssModObj.fooInnDiv }>{ /* What: Footer Inner Div Element. Why: The footer's content sits in the page's centered column. How: This stacks the brand, the links, and the copyright. */ }


				<div>{ /* What: Footer Brand Div Element. Why: The brand name and its tagline read as one block. How: This stacks the name above the tagline, with no styling of its own. */ }


					<span className={ cssModObj.fooLogSpa }><span aria-hidden='true'>🐾</span> The Bernie Bears</span>{ /* What: Footer Logo Span Element. Why: The footer names the brand. How: This shows the name after a paw print, which is hidden from screen readers as decoration. */ }

					<p className={ cssModObj.fooTagPar }>Lilah & Norah: spreading joy, bear hugs & fluffy paws one day at a time</p>{ /* What: Footer Tagline Paragraph Element. Why: The tagline sums up what the girls are about. How: This shows one italic line under the name. */ }


				</div>

				<nav
					className={ cssModObj.fooNavNav }

					aria-label='Footer'
				>{ /* What: Footer Navigation Nav Element. Why: Every page can be reached from the bottom of any page, and a second navigation landmark needs a label to tell it from the bar's. How: This holds a link to each page and to the brand's main site, labelled Footer. */ }


					<Link
						className={ cssModObj.fooLinAnc }

						to='/'
					>Home</Link>{ /* What: Home Link. Why: The footer links back to the home page. How: This routes to the root path. */ }



					<Link
						className={ cssModObj.fooLinAnc }

						to='/about'
					>About</Link>{ /* What: About Link. Why: The footer links to the girls' story. How: This routes to the About page. */ }



					<Link
						className={ cssModObj.fooLinAnc }

						to='/links'
					>Social Links</Link>{ /* What: Social Links Link. Why: The footer links to every place to follow the girls. How: This routes to the Social Links page. */ }



					<Link
						className={ cssModObj.fooLinAnc }

						to='/contact'
					>Contact</Link>{ /* What: Contact Link. Why: The footer links to the ways to get in touch. How: This routes to the Contact page. */ }



					<a
						className={ cssModObj.fooLinAnc }

						href='https://theberniebears.com/'
						rel='noopener'
						target='_blank'
					>Official Site</a>{ /* What: Footer Link Anchor Element. Why: This site exists to promote the brand's main site, which every page should point to. How: This opens theberniebears.com in a new tab, without giving it access to this one, while still letting its analytics see the visit came from this site. */ }


				</nav>

				<p className={ cssModObj.fooCopPar }>© { curYeaNum } The Bernie Bears. Made with <span aria-label='love' role='img'>🩷</span>, bear hugs & lots of treats.</p>{ /* What: Footer Copyright Paragraph Element. Why: The footer ends with the copyright. How: This prints the current year read on each render, with the heart announced as love. */ }


			</div>


		</footer>


	);


}

// #endregion SitFooCom

// #endregion Components



// #region Exports

export { SitFooCom }; // What: Named Exports. Why: Every page renders the footer below its content. How: This exports SitFooCom.

// #endregion Exports


