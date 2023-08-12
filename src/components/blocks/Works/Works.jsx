import React from "react";
import "./Works.css";
import Accordion from "../../Accordion";
function Works(props) {
	return (
		<section className="block block--works">
			<div className="container">
				<h2 className="works">Works</h2>
				<p>Each sample has unique content.</p>
				<Accordion />
				<a href="#" className="email__tagline">
					Live demo
				</a>
			</div>
		</section>
	);
}

export default Works;
