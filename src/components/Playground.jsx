import React, { useState } from "react";
import "../styles/playground.css";
const accordionData = [
	{
		title: "Section 1",
		content: "Content for section 1",
	},
	{
		title: "Section 2",
		content: "Content for section 2",
	},
	{
		title: "Section 3",
		content: "Content for section 3",
	},
];

const Playground = () => {
	const [openIndices, setOpenIndices] = useState([]);

	const toggleAccordion = (index) => {
		if (openIndices.includes(index)) {
			setOpenIndices(openIndices.filter((i) => i !== index));
		} else {
			setOpenIndices([...openIndices, index]);
		}
	};

	return (
		<div className="accordion-container">
			{accordionData.map((item, index) => (
				<div key={index} className="accordion">
					<div
						className="accordion-header"
						onClick={() => toggleAccordion(index)}>
						<h2>{item.title}</h2>
						<span>{openIndices.includes(index) ? "-" : "+"}</span>
					</div>
					{openIndices.includes(index) && (
						<div className="accordion-content">{item.content}</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Playground;
