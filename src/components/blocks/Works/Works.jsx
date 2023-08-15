import React from "react";
import "./Works.css";
import Accordion from "../../Accordion";
function Works(props) {
	return (
		<section id="works" className="block block--works">
			<div className="container">
				<h2 className="works">Works</h2>
				<p>Each sample has unique content.</p>
				<Accordion />
			</div>
		</section>
	);
}

export default Works;
