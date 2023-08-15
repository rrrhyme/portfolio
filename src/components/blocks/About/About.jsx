import React from "react";
import "./About.css";
function About(props) {
	return (
		<>
			<section id="about" className="block block--about">
				<div className="container">
					<div className="about">
						<img
							src={process.env.PUBLIC_URL + "/assets/images/about.jpg"}
							alt="About"
						/>
						<div className="about__header">
							<h2 className="about-me">About Me</h2>
							<h3 className="about__heading">
								20 years of experience in writing.
							</h3>
							<p className="about__tagline">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
								totam, quis fugiat autem quos sunt mollitia repellendus
								praesentium! Architecto, quos.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
