import React from "react";
import "./Hero.css";
import SvgHero from "../../SvgHero";

function Hero(props) {
	return (
		<div>
			<section id="home" className="block block--hero">
				<div className="container">
					<div className="hero-main">
						<SvgHero />
						<div className="hero__header">
							<h1 className="hero__heading">Lorem ipsum dolor sit amet.</h1>
							<p className="hero__tagline">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
								quasi et. Hic, corrupti? At, expedita? Eveniet veritatis sit
								obcaecati amet!
							</p>
						</div>
					</div>
					<div className="wave">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none">
							<path
								d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
								className="shape-fill"></path>
						</svg>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Hero;
