import React from "react";
import "./Works.css";
import Accordion from "../../Accordion";
import Published from "../Published/Published";

function Works(props) {
	return (
		<section id="works" className="block block--works">
			<div className="container grid grid--1x2">
				<div className="headings">
					<h2 className="works">Works</h2>
					<p className="works__tagline">
						I'm still working on my personal projects. You can look at my
						published writing samples!
					</p>
				</div>
				<div className="personal-projects-container works-content-container">
					<p className="personal__tagline">Personal Projects</p>
					<div className="card-work">
						<img
							className="coming-soon"
							src={process.env.PUBLIC_URL + "/assets/images/coming-soon.png"}
							alt="coming-soon"
						/>
						<Accordion />
					</div>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background: "transparent",
						}}></div>
				</div>
				<div className="published-container works-content-container">
					<p className="published__tagline">Published Writing Samples</p>
					<div className="card-work">
						<Published />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Works;
