import React, { useState } from "react";
import Topbar from "../top-bar/Topbar";
import "./carousel.css";
function Carousel({ car }) {
	const [img, setImg] = useState(1);
	const [mode, setMode] = useState("Exterior");
	const [color, setColor] = useState(
		car === "s90" ? "black" : "crystal-white"
	);

	const S90 = () => {
		return (
			<div className="d-flex btn-container">
				<button
					className="s90-btn-1"
					onClick={() => {
						setColor("black");
					}}
				></button>
				<button
					className="s90-btn-2"
					onClick={() => {
						setColor("bright-silver");
					}}
				></button>
				<button
					className="s90-btn-3"
					onClick={() => {
						setColor("denim-blue");
					}}
				></button>
				<button
					className="s90-btn-4"
					onClick={() => {
						setColor("white");
					}}
				></button>
			</div>
		);
	};
	const X360 = () => {
		return (
			<div className="d-flex btn-container">
				<button
					className="x360-btn-1"
					onClick={() => {
						setColor("crystal-white");
					}}
				></button>
				<button
					className="x360-btn-2"
					onClick={() => {
						setColor("denim-blue");
					}}
				></button>
				<button
					className="x360-btn-4"
					onClick={() => {
						setColor("onyx-black");
					}}
				></button>
				<button
					className="x360-btn-4"
					onClick={() => {
						setColor("pine-grey");
					}}
				></button>
				<button
					className="x360-btn-5"
					onClick={() => {
						setColor("thunder-grey");
					}}
				></button>
			</div>
		);
	};

	const inChangeMode = () => {
		setMode("Interior");
	};
	const exChangeMode = () => {
		setMode("Exterior");
	};

	const Exterior = ({car}) => {
		return (
			<>
				<div className="d-flex carousel">
					<button
						className="move-btn prev-btn"
						onClick={() => {
							img === 1
								? setImg(car === "s90" ? 4 : 5)
								: setImg(img - 1);
						}}
					></button>
					<img
						src={`assets/images/${
							car === "s90" ? "Volvo S90/" : "Volvo X360/"
						}${color}${img}.jpeg`}
						alt="Car Image"
					/>
					<button
						className="move-btn next-btn"
						onClick={() => {
							img === (car === "s90" ? 4 : 5)
								? setImg(1)
								: setImg(img + 1);
						}}
					></button>
				</div>
				{car === "s90" ? <S90 /> : <X360 />}
				<h6 className="" style={{ fontWeight: "300" }}>
					Color:{" "}
					<span
						style={{ fontWeight: "600", color: "rgb(235, 33, 60)" }}
					>
						{color}
					</span>
				</h6>
			</>
		);
	};

	const Interior = ({car}) => {
		return (
			<>
				<div className="d-flex carousel">
					<button
						className="move-btn prev-btn"
						onClick={() => {
							img === 1
								? setImg(car === "s90" ? 4 : 6)
								: setImg(img - 1);
						}}
					></button>
					<img
						src={`assets/images/${
							car === "s90" ? "Volvo S90/" : "Volvo X360/"
						}interior${img}.jpeg`}
						alt="Car Image"
					/>
					<button
						className="move-btn next-btn"
						onClick={() => {
							img === (car === "s90" ? 4 : 6)
								? setImg(1)
								: setImg(img + 1);
						}}
					></button>
				</div>
			</>
		);
	};

	return (
		<div className="container">
			<Topbar
				car={car}
				mode={mode}
				inChangeMode={inChangeMode}
				exChangeMode={exChangeMode}
			/>
		
			{mode == "Interior" ? <Interior car={car}/> : <Exterior car={car}/>}		
		</div>
	);
}

export default Carousel;
