import React from "react";
import "./Download.css";
import { Link } from "react-router-dom";

function Download(props) {
	const downloadBtn = () => {
		const pdfUrl = process.env.PUBLIC_URL + "/assets/files/Inoceno_CV-2023.pdf";
		const aTag = document.createElement("a");
		aTag.href = pdfUrl;
		aTag.download = "Inoceno_CV-2023.pdf";
		aTag.click();
	};

	return (
		<section id="contact" className="block--downloads">
			<div className="container">
				<div className="download__content">
					<p className="download__headline">
						Looking forward to working with you!
					</p>
					<p className="download__headline">
						You can tell me about your project ideas{" "}
						<Link className="here" to="/contact">
							here.
						</Link>
					</p>
					<div className="button">
						<button
							onClick={downloadBtn}
							className="download__button"
							type="button"
							data-download="myResume">
							Download Résumé
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Download;
