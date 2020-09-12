import React from "react";
import "./slider.scss";

const Slider = ({ rangeValue, setRangeValue }) => {
	const rangerValueHandler = (event) => {
		setRangeValue((rangeValue = event.target.value));
	};
	return (
		<div className="slider">
			<input
				type="range"
				min="100000"
				max="5000000"
				step="100000"
        className="slider-input"
				onChange={rangerValueHandler}
			/>
		</div>
	);
};
export default Slider;
