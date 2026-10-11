


// #region Imports

import './contact.css'; // What: Contact Stylesheet Import. Why: The Contact page's own styles live beside it. How: This is imported purely for its side effect, adding its rules to the page.

// #endregion Imports



/**
 * contact.tsx = Contact
 *
 * @summary
 * The Contact page: a header, the ways to get in touch beside a panel that
 * sends visitors to the contact form on The Bernie Bears' main site or to
 * their email, and a closing band. The site exists to promote the brand and
 * its main site, so messages go through the main site's own contact page
 * rather than a form here.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

// #region ConPagCom

/**
 * ConPagCom = Contact Page Component
 *
 * @summary
 * Renders the Contact page: the header; the info column with the email as a
 * link, the social media and response time cards, and a note for collab
 * requests; the panel with a button to the main site's contact page, which
 * opens in a new tab without giving it access to this one, and a button that
 * starts an email; and the closing band. Every emoji is hidden from screen
 * readers as decoration.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props - This component does not use any props.
 *
 * @returns The Contact page's wrapper div.
 *
 * @example
 * ```tsx
 * ConPagCom() // => <ConPagCom />
 * ```
 *
*/

function ConPagCom () : React.JSX.Element {


	return (


		<div className='contact page-enter'>{ /* What: Contact Page Div Element. Why: The Contact page fades up into place like every other page. How: This holds the page's sections. */ }


			<section className='page-header'>{ /* What: Page Header Section Element. Why: The page opens with its title. How: This holds the heading and a short line under it. */ }


				<h1>Say Hello!</h1>{ /* What: Page Header Heading Element. Why: The page's heading invites visitors to get in touch. How: This names the page. */ }

				<p>We'd love to hear from you! Lilah & Norah are always listening <span aria-hidden='true'>🐾</span></p>{ /* What: Page Header Paragraph Element. Why: A short line sets a friendly tone. How: This shows it under the heading, ending in a paw print hidden from screen readers. */ }


			</section>



			<section className='contact-section'>{ /* What: Contact Section Element. Why: The ways to get in touch are the page's content. How: This holds the info column and the panel. */ }


				<div className='contact-grid'>{ /* What: Contact Grid Div Element. Why: The info and the panel sit side by side on wide screens. How: This lays out the two columns. */ }


					<div className='contact-info'>{ /* What: Contact Info Div Element. Why: The ways to get in touch read as one column. How: This stacks the heading, a line, the cards, and the note. */ }


						<h2>Get in Touch</h2>{ /* What: Contact Info Heading Element. Why: The column needs a heading. How: This names it. */ }

						<p>{ /* What: Contact Info Paragraph Element. Why: A short line says what kind of messages are welcome. How: This shows it under the heading. */ }
							Have a question, a collaboration idea, or just want to share how much you
							love Lilah & Norah? Drop us a message: we read every one!
						</p>



						<div className='contact-cards'>{ /* What: Contact Cards Div Element. Why: Each way to get in touch is a card. How: This stacks the three cards. */ }


							<div className='contact-card'>{ /* What: Email Contact Card Div Element. Why: Email reaches the family directly. How: This shows the address as a link that starts an email. */ }


								<span
									className='contact-icon'

									aria-hidden='true'
								>📧</span>{ /* What: Contact Icon Span Element. Why: Each card opens with an emoji. How: This shows an envelope, hidden from screen readers as decoration. */ }


								<div>{ /* What: Contact Card Text Div Element. Why: The card's label and value read as one block. How: This stacks them, with no styling of its own. */ }


									<strong>Email Us</strong>{ /* What: Contact Card Label Strong Element. Why: The card names what it offers. How: This shows the label above the value. */ }

									<p><a href='mailto:hello@theberniebears.com'>hello@theberniebears.com</a></p>{ /* What: Email Address Paragraph Element. Why: The address should be one tap away. How: This shows it as a link that starts an email. */ }


								</div>


							</div>


							<div className='contact-card'>{ /* What: Social Media Contact Card Div Element. Why: Many fans reach out where they already follow the girls. How: This says to send a direct message. */ }


								<span
									className='contact-icon'

									aria-hidden='true'
								>📱</span>{ /* What: Contact Icon Span Element. Why: Each card opens with an emoji. How: This shows a phone, hidden from screen readers as decoration. */ }

								<div>{ /* What: Contact Card Text Div Element. Why: The card's label and value read as one block. How: This stacks them, with no styling of its own. */ }


									<strong>Social Media</strong>{ /* What: Contact Card Label Strong Element. Why: The card names what it offers. How: This shows the label above the value. */ }

									<p>DM us on Facebook or Instagram</p>{ /* What: Contact Card Value Paragraph Element. Why: The card says where to send a message. How: This names the two platforms. */ }


								</div>


							</div>


							<div className='contact-card'>{ /* What: Response Time Contact Card Div Element. Why: Visitors want to know when to expect a reply. How: This says how long a reply usually takes. */ }


								<span
									className='contact-icon'

									aria-hidden='true'
								>⏱️</span>{ /* What: Contact Icon Span Element. Why: Each card opens with an emoji. How: This shows a stopwatch, hidden from screen readers as decoration. */ }

								<div>{ /* What: Contact Card Text Div Element. Why: The card's label and value read as one block. How: This stacks them, with no styling of its own. */ }


									<strong>Response Time</strong>{ /* What: Contact Card Label Strong Element. Why: The card names what it offers. How: This shows the label above the value. */ }

									<p>Usually within 1–2 business days</p>{ /* What: Contact Card Value Paragraph Element. Why: The card sets expectations. How: This gives the usual reply time. */ }


								</div>


							</div>


						</div>



						<div className='contact-note'>{ /* What: Contact Note Div Element. Why: Collab requests should be easy to spot in the inbox. How: This asks for a keyword in the subject line, after a bear hidden from screen readers. */ }


							<span aria-hidden='true'>🐻</span>{ /* What: Contact Note Icon Span Element. Why: The note opens with an emoji. How: This shows a bear, hidden from screen readers as decoration. */ }

							<p>{ /* What: Contact Note Paragraph Element. Why: The note's request is its content. How: This shows it beside the bear. */ }
								For collabs, sponsorships, or media inquiries, please include
								"Collab" in your subject line so we can find you quickly!
							</p>


						</div>


					</div>



					<div className='contact-panel'>{ /* What: Contact Panel Div Element. Why: Messages go through the brand's main site, which this site exists to promote. How: This holds a heading, a line, and the two ways to send a message. */ }


						<h2>Send Us a Message</h2>{ /* What: Contact Panel Heading Element. Why: The panel says what it's for. How: This names it. */ }

						<p>{ /* What: Contact Panel Paragraph Element. Why: Visitors should know where their message goes. How: This points them to the main site's contact form, or to email. */ }
							The best way to reach Lilah & Norah's family is the contact form on
							The Bernie Bears' main site. You can also email us any time.
						</p>

						<div className='contact-panel-buttons'>{ /* What: Contact Panel Buttons Div Element. Why: The two ways to send a message sit together. How: This sets the buttons in a row that wraps on narrow screens. */ }


							<a
								className='btn btn-primary'

								href='https://theberniebears.com/pages/contact'
								rel='noopener'
								target='_blank'
							>Open the Contact Form</a>{ /* What: Main Site Contact Anchor Element. Why: The main site's contact form is where messages belong. How: This opens its Contact Us page in a new tab, without giving it access to this one, while still letting its analytics see the visit came from this site. */ }

							<a
								className='btn btn-outline'

								href='mailto:hello@theberniebears.com'
							>Email Us</a>{ /* What: Email Anchor Element. Why: Some visitors would rather send an email. How: This starts one to the family's address. */ }


						</div>


					</div>


				</div>


			</section>



			<section className='contact-footer-wave'>{ /* What: Contact Footer Wave Section Element. Why: The page closes on a warm note. How: This holds a row of emoji and a closing line on a gradient band. */ }


				<div
					className='container'

					style={{ textAlign : 'center' }}
				>{ /* What: Contact Footer Wave Container Div Element. Why: The closing words sit centered in the page's column. How: This holds the emoji row and the line. */ }


					<p
						className='wave-bears'

						aria-hidden='true'
					>🐻 🐾 🐻</p>{ /* What: Wave Bears Paragraph Element. Why: A row of bears and a paw leads into the closing line. How: This shows them, hidden from screen readers as decoration. */ }

					<p className='wave-text'>Lilah & Norah can't wait to hear from you!</p>{ /* What: Wave Text Paragraph Element. Why: The page ends warmly. How: This shows the closing line in the script font. */ }


				</div>


			</section>


		</div>


	);


}

// #endregion ConPagCom

// #endregion Components



// #region Exports

export { ConPagCom }; // What: Named Exports. Why: The Contact route renders this page. How: This exports ConPagCom.

// #endregion Exports


