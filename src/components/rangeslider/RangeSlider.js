import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProgressBar from "../ProgressBar";
import Slider from "./slideComponent/Slider";
import NumberFormat from "react-number-format";

import "./rangeslider.scss";
const RangeSlider = ({ completed }) => {
	const [rangeValue, setRangeValue] = useState(100000);

	return (
		<div className="range-slider">
			<ProgressBar completed={completed} />
			<h2>
				What is your estimated <span>home</span>
			</h2>
			<div className="range-slider-component">
				<NumberFormat
					value={rangeValue}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
					renderText={(value) => <h1>{value}</h1>}
				/>
				<Slider setRangeValue={setRangeValue} rangeValue={rangeValue} />
			</div>
			<button>continue</button>
			<Link to='/'>
				<p>back</p>
			</Link>
		</div>
	);
};
export default RangeSlider;
