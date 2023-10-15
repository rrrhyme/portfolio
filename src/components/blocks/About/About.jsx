import React from "react";
import "./About.css";

function About(props) {
	return (
		<>
			<section id="about" className="block block--about">
				<div className="container">
					<div className="about">
						<img
							className="about__image"
							src={process.env.PUBLIC_URL + "/assets/images/about.webp"}
							alt="About"
						/>
						<div className="about__header">
							<h2 className="about-me">About Me</h2>
							<h3 className="about__heading">
								20 years of experience in writing.
							</h3>
							<p className="about__tagline">
								A UX writer with a background in science communication sets me
								apart in the field of content writing; I serve as a bridge
								between the complex world of scientific/technical knowledge and
								user-centric design. I have a knack for translating complex
								technical concepts into clear, engaging, and easily
								understandable language, making them accessible to a broad
								audience. Whether it's simplifying intricate scientific research
								or explaining cutting-edge technology, I am adept at breaking
								down barriers to understanding and fostering a sense of
								curiosity.
							</p>
							<br />
							<p className="about__tagline">
								Join me on a journey through the intersection of technical world
								and design, where words serve as the conduit for knowledge and
								innovation. If you're seeking a UX writer who can make the
								intricacies of technology or science accessible and exciting,
								I'd love to collaborate with you on projects that inspire and
								inform.
							</p>
							<br />
							<p className="about__tagline">
								Let's embark on a quest to make science an integral part of the
								digital landscape. Explore my portfolio, and let's work together
								to create exceptional user experiences for your company and your
								clients.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
