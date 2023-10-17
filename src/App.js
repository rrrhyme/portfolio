import React from "react";
import "./styles/app.css";
import Navigation from "./components/blocks/Navigation/Navigation";
import Hero from "./components/blocks/Hero.jsx/Hero";
import About from "./components/blocks/About/About";
import Works from "./components/blocks/Works/Works";
import Contact from "./components/blocks/Contact/Contact";
import Download from "./components/blocks/Download/Download";
import { Routes, Route, Navigate } from "react-router-dom";
// import Published from "./components/blocks/Published/Published";

function MainContent() {
	return (
		<div>
			<Hero />
			<About />
			<Works />
			<Download />
		</div>
	);
}

function App(props) {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/contact" element={<Contact />} />
				<Route path="/portfolio" element={<MainContent />} />
				<Route path="*" element={<Navigate to="/portfolio" />} />
			</Routes>
			{/* <Published /> */}
		</div>
	);
}

export default App;
