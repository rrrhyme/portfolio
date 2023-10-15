import React from "react";
import "./Published.css";

const ulLists = [
	{
		idLink: 1,
		href: "https://support.shaw.ca/t5/tv-articles/how-to-use-apple-tv-plus-with-ignite-tv-and-ignite-streaming/ta-p/52923",
		text: "How To: Use Apple TV+ with Ignite TV and Ignite Streaming",
	},
	{
		idLink: 2,
		href: "https://support.shaw.ca/t5/tv-articles/how-to-use-sportsnet-app-with-ignite-tv-and-ignite-streaming/ta-p/62520",
		text: "How To: Use Sportsnet+ App with Ignite TV and Ignite Streaming",
	},
	{
		idLink: 3,
		href: "https://support.shaw.ca/t5/home-phone-articles/next-generation-9-1-1-faqs/ta-p/43377",
		text: "Next Generation 9-1-1 FAQs",
	},
	{
		idLink: 4,
		href: "https://www.shawdirect.ca/english/support/article/8359/",
		text: "Your Shaw Direct Bill Explained",
	},
	{
		idLink: 5,
		href: "https://www.shawdirect.ca/english/support/article/8433",
		text: "Shaw Direct's Network Upgrade",
	},
];

function Published(props) {
	return (
		<>
			<section className={`published `}>
				<div className="published__container">
					<ul className="published__list published__list--bulleted">
						{ulLists.map((item) => (
							<li key={item.idLink} className="published__item">
								<a href={item.href} target="_blank" rel="noreferrer">
									{item.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Published;
