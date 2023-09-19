import React from "react";
import "./styles/app.css";
import Navigation from "./components/blocks/Navigation/Navigation";
import Hero from "./components/blocks/Hero.jsx/Hero";
import About from "./components/blocks/About/About";
import Works from "./components/blocks/Works/Works";
import Contact from "./components/blocks/Contact/Contact";
// import Published from "./components/blocks/Published/Published";
function App(props) {
	return (
		<div>
			<Navigation />
			<Hero />
			<About />
			<Works />
			<Contact />
			{/* <Published /> */}
		</div>
	);
}

export default App;
