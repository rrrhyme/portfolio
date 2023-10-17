import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact(props) {
	return (
		<section className="block block--contacts">
			<div className="container">
				<h2 className="contacts__heading">Contact</h2>
				<h2 className="contacts__sub-heading">Stay in touch!</h2>
				<p className="contacts__paragraph">Contact Information</p>
				<div className="contact__section">
					<div className="contacts contact--linkedin">
						<span className="icon-container ">
							<svg className="icon--contacts">
								<use
									xlinkHref={
										process.env.PUBLIC_URL +
										"/assets/images/sprites.svg#linkedin"
									}></use>
							</svg>
						</span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/rcinoceno/">
							Linkedin
						</a>
					</div>
					<div className="contacts contact--email">
						<span className="icon-container ">
							<svg className="icon--contacts">
								<use
									xlinkHref={
										process.env.PUBLIC_URL + "/assets/images/sprites.svg#email"
									}></use>
							</svg>
						</span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://mail.google.com/mail/u/0/#inbox?compose=new">
							djchiriko@icloud.com
						</a>
					</div>
					<div className="tooltip"></div>
				</div>
				<div className="btn-container">
					<Link to="/portfolio" className="homeBtn">
						Go to Home Page
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Contact;
