import React from "react";
import "./Published.css";

function Published(props) {
	return (
		<>
			<section className={`published `}>
				<div className="published__container">
					<header className="published__header">
						<h3 className="published__headings">Published writing samples</h3>
					</header>
					<ul className="published__list">
						<li className="published__item">
							<a href="#1">Link 1</a>
						</li>
						<li className="published__item">
							<a href="#2">Link 2</a>
						</li>
						<li className="published__item">
							<a href="#3">Link 3</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Published;
