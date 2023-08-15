import React from "react";
import "./Contact.css";

function Contact(props) {
	return (
		<section id="contact" className="block block--contacts">
			<div className="container">
				<h2 className="contacts__heading">Contacts</h2>
				<h2 className="contacts__sub-heading">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quis.
				</h2>
				<p className="contacts__paragraph">Lorem ipsum dolor sit amet.</p>
				<div className="contact__section">
					<div className="contacts contact--linkedin">
						<span className="icon-container ">
							<svg className="icon--contacts">
								<use xlinkHref="/assets/images/sprites.svg#linkedin"></use>
							</svg>
						</span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.linkedin.com/in/ronnel-javier/">
							Linkedin
						</a>
					</div>
					<div className="contacts contact--email">
						<span className="icon-container ">
							<svg className="icon--contacts">
								<use xlinkHref="/assets/images/sprites.svg#email"></use>
							</svg>
						</span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://mail.google.com/mail/u/0/#inbox?compose=new">
							demo@gmail.com
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
