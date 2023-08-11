import React, { useState } from "react";
import "./Navigation.css";

function Navigation(props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<header>
				<nav className="nav">
					<span className="nav__brand">logo</span>
					<svg
						onClick={handleToggle}
						className={`nav__toggler ${isMenuOpen ? "nav--extended" : ""}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
					</svg>
					<ul className="nav__list md">
						<li className="nav__item">
							<a href="#home">Home</a>
						</li>
						<li className="nav__item">
							<a href="#about">About</a>
						</li>
						<li className="nav__item">
							<a href="#works">Works</a>
						</li>
						<li className="nav__item">
							<a href="#contact">Contact</a>
						</li>
					</ul>
					{isMenuOpen && (
						<ul className="nav__list sm">
							<li className="nav__item">
								<a href="#home">Home</a>
							</li>
							<li className="nav__item">
								<a href="#about">About</a>
							</li>
							<li className="nav__item">
								<a href="#works">Works</a>
							</li>
							<li className="nav__item">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					)}
				</nav>
			</header>
		</>
	);
}

export default Navigation;
