import React, { useState } from "react";
import "../styles/Accordion.css";

// const accordionData = [
// 	{
// 		title: "Sample 1",
// 		subTitle:
// 			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aspernatur.",
// 		content:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum laudantium ad, ab adipisci enim velit in repudiandae provident natus repellat ut labore voluptate nobis laboriosam exercitationem? Repudiandae cum aliquam doloribus atque porro facere, hic temporibus unde eum, eveniet illum?",
// 	},
// 	{
// 		title: "Sample 1",
// 		subTitle:
// 			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aspernatur.",
// 		content:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum laudantium ad, ab adipisci enim velit in repudiandae provident natus repellat ut labore voluptate nobis laboriosam exercitationem? Repudiandae cum aliquam doloribus atque porro facere, hic temporibus unde eum, eveniet illum?",
// 	},
// 	{
// 		title: "Sample 1",
// 		subTitle:
// 			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, aspernatur.",
// 		content:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum laudantium ad, ab adipisci enim velit in repudiandae provident natus repellat ut labore voluptate nobis laboriosam exercitationem? Repudiandae cum aliquam doloribus atque porro facere, hic temporibus unde eum, eveniet illum?",
// 	},
// ];

const accordionItem = [
	{
		title: "Sample 1 ",
		section:
			"Section 1 Section Section Section Section Section Section Section Section",
		subArray: [
			{
				key: "Before",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
							eligendi, perferendis animi ex ullam aut nobis facilis,
							reprehenderit suscipit commodi eveniet harum mollitia beatae!
							Molestias magnam laborum, exercitationem laboriosam dolorum odit
							in dicta vitae accusantium accusamus! Officia a dolorum ad tempora
							accusamus porro nisi. Aut mollitia quidem quae fuga optio!
						</p>
					</>
				),
			},
			{
				key: "After",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
							inventore inventore. inventore. inventore. inventore. inventore.
							inventore. inventore..
						</p>
					</>
				),
			},
		],
	},
	{
		title: "Sample 2 ",
		section:
			"Section 2 Section Section Section Section Section Section Section Section",
		subArray: [
			{
				key: "Before",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
							eligendi, perferendis animi ex ullam aut nobis facilis,
							reprehenderit suscipit commodi eveniet harum mollitia beatae!
							Molestias magnam laborum, exercitationem laboriosam dolorum odit
							in dicta vitae accusantium accusamus! Officia a dolorum ad tempora
							accusamus porro nisi. Aut mollitia quidem quae fuga optio!
						</p>
					</>
				),
			},
			{
				key: "After",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
							inventore.
						</p>
					</>
				),
			},
		],
	},
	{
		title: "Sample 3 ",
		section:
			"Section 3 Section Section Section Section Section Section Section Section",
		subArray: [
			{
				key: "Before",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
							eligendi, perferendis animi ex ullam aut nobis facilis,
							reprehenderit suscipit commodi eveniet harum mollitia beatae!
							Molestias magnam laborum, exercitationem laboriosam dolorum odit
							in dicta vitae accusantium accusamus! Officia a dolorum ad tempora
							accusamus porro nisi. Aut mollitia quidem quae fuga optio! bla bla
							bla bla bla bla bla bla bala bla balbalbalba lba bla bla bab ab
							lab aba lba b al bal ba
						</p>
					</>
				),
			},
			{
				key: "After",
				content: (
					<>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
							inventore.
						</p>
					</>
				),
			},
		],
	},
];

function Accordion(props) {
	const [openIndices, setOpenIndices] = useState([]);
	const tempDisable = true;

	const handleToggleAccordion = (index) => {
		if (!tempDisable) {
			if (openIndices.includes(index)) {
				setOpenIndices(openIndices.filter((i) => i !== index));
			} else setOpenIndices([...openIndices, index]);
		}
	};
	return (
		<div className="card--filter">
			{accordionItem.map((item, index) => {
				return (
					<section className="accordion-section" key={index}>
						<header>
							<h3 className="accordion__header">{item.title}</h3>
						</header>
						<div className="accordion">
							<div
								onClick={() => handleToggleAccordion(index)}
								className="accordion__container">
								<header className="section__heading">
									<h3 className="section__header">{item.section}</h3>
								</header>
								<span>
									<svg className="icon-accordion">
										<use
											xlinkHref={`/assets/images/sprites.svg#${
												openIndices.includes(index)
													? "chevron-up"
													: "chevron-down"
											}`}></use>
									</svg>
								</span>
							</div>
							<div
								className={`${
									openIndices.includes(index)
										? "accordion__content show"
										: "accordion__content"
								} grid grid--1x2`}>
								{item.subArray.map((subItem, subIndex) => {
									return (
										<div key={subIndex} className="accordion__tagline">
											<p className="accordion__sub-heading">{subItem.key}</p>
											{subItem.content}
										</div>
									);
								})}
							</div>
						</div>
					</section>
				);
			})}
		</div>
	);
}

export default Accordion;
