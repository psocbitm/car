import React from "react";
import Carousel from "../Components/carousel/Carousel";
import Topbar from "../Components/top-bar/Topbar";

function VolvoS90() {
    let car= "s90"
	return (
		<div className="container">

			<Carousel car={car} />
		</div>
	);
}

export default VolvoS90;
