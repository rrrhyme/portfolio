import React, { useState } from "react";
import "./Navigation.css";
import { useLocation } from "react-router-dom";

const listItem = [
	{ id: "home", text: "Home" },
	{ id: "about", text: "About" },
	{ id: "works", text: "Works" },
	{ id: "contact", text: "Contact" },
];

function Navigation(props) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const handleToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleNavigate = (event, targetId) => {
		event.preventDefault();
		const targetRef = document.getElementById(targetId);
		if (targetRef) {
			targetRef.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	const renderNav = (list) => {
		if (location.pathname === "/contact") {
			const filtered = list.filter((item) => item.id === "contact");
			return filtered.map((item) => (
				<li key={item.id} className="nav__item">
					<a href={`#${item.id}`} onClick={(e) => handleNavigate(e, item.id)}>
						{item.text}
					</a>
				</li>
			));
		} else {
			return list.map((item) => (
				<li key={item.id} className="nav__item">
					<a href={`#${item.id}`} onClick={(e) => handleNavigate(e, item.id)}>
						{item.text}
					</a>
				</li>
			));
		}
	};

	return (
		<>
			<header className="nav">
				<nav className="nav__header">
					<span className="nav__brand">Rhyme</span>
					<svg
						onClick={handleToggle}
						className={`nav__toggler ${isMenuOpen ? "nav--extended" : ""}`}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />
					</svg>
					<ul className="nav__list md">
						{/* {listItem.map((item) => (
							<li
								key={item.id}
								className={`nav__item ${
									activeSection === item.id ? "active" : ""
								}`}>
								<a
									className={`nav__text ${
										activeSection === item.id ? "active" : ""
									}`}
									href={`#${item.id}`}
									onClick={(e) => handleNavigate(e, item.id)}>
									{item.text}
								</a>
							</li>
						))} */}
						{renderNav(listItem)}
					</ul>
					{/* Window < 768 */}
					<ul
						className={`nav__list sm ${
							isMenuOpen ? "nav--show" : "nav--close"
						}`}>
						{listItem.map((item) => (
							<li key={item.id} className="nav__item">
								<a
									href={`#${item.id}`}
									onClick={(e) => handleNavigate(e, item.id)}>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navigation;
