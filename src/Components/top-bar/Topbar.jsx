import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
function Topbar({ car, mode, inChangeMode,exChangeMode }) {
	return (
		<div className="container d-flex">
			<div className="right-container">
				<h4 className="design">Design + {mode}</h4>
				<Link
					to={`/${car}`}
					style={{ textDecoration: "none", color: "black" }}
				>
					<h1 className="heading">Volvo {car}</h1>
				</Link>
			</div>
			<div className="left-container d-flex">
				<Link
					to="/"
					style={{ textDecoration: "none", color: "#524f4f" }}
				>
					<h2 className="links">Home</h2>
				</Link>
				<h2
					className="links"
					onClick={()=>{
						exChangeMode()
					}}
				>
					Exterior
				</h2>
				<h2 className="links" onClick={()=>{
					inChangeMode()
				}}>
					Interior
				</h2>
			</div>
		</div>
	);
}

export default Topbar;
