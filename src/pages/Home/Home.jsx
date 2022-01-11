import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
	return (
		<div className="d-flex container home-container">
			<h1 className="heading text-center">Select Model</h1>

			<div className="img-container d-flex">
				<Link
					to="/s90"
					className="img-text-container d-flex"
					style={{ textDecoration: "none", color: "#383636" }}
				>
					<img className="img" src="assets/images/volvo S90/s90.jpeg" alt="" />
					<span className="img-text">Volvo S90</span>
				</Link>

				<Link
					to="/x360"
					className="img-text-container d-flex"
					style={{ textDecoration: "none", color: "#383636" }}
				>
					<img className="img" src="assets/images/volvo X360/x360.jpeg" alt="" />
					<span className="img-text">Volvo X360</span>
				</Link>
			</div>
		</div>
	);
}

export default Home;
