import React from "react";
import "./styles/app.css";
import Navigation from "./components/blocks/Navigation/Navigation";
import Hero from "./components/blocks/Hero.jsx/Hero";
import About from "./components/blocks/About/About";
function App(props) {
	return (
		<div>
			<Navigation />
			<Hero />
			<About />
		</div>
	);
}

export default App;
