import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./houseselect.scss";

//img imports
import img1 from "../../assets/Group 174.png";
import img2 from "../../assets/Group 175.png";
import img3 from "../../assets/Group 176.png";
import img4 from "../../assets/Group 177.png";

//components
import Grid from "./homeComponent/Grid";
import ProgressBar from "../ProgressBar";

const HouseSelect = ({ completed }) => {
	const [img, setImg] = useState([
		{ img: img1, text: "Single Family" },
		{ img: img2, text: "Multi Family" },
		{ img: img4, text: "Townhouse" },
		{ img: img3, text: "Condominium" },
	]);
	return (
		<div className="house-select">
			<ProgressBar completed={completed} />
			<h2>
				What <span>Type of Home</span> are you looking to sell.
			</h2>
			<Grid img1={img[0]} img2={img[1]} img3={img[2]} img4={img[3]} />
			<p className="house-select-others">Other</p>
		</div>
	);
};
export default HouseSelect;
