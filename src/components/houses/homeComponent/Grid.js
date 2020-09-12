import React from "react";
import { Link } from "react-router-dom";
import "./grid.scss";

const Grid = ({ img1, img2, img3, img4 }) => {
	return (
		<div className="grid">
			<div className="grid-home-img grid-home-img-1">
				<img src={img1.img} alt="" />
				<Link to="/range">
					<button>{img1.text}</button>
				</Link>
			</div>
			<div className="grid-home-img grid-home-img-2">
				<img src={img2.img} alt="" />
				<Link to="/range">
					<button>{img2.text}</button>
				</Link>
			</div>
			<div className="grid-home-img grid-home-img-3">
				<img src={img3.img} alt="" />
				<Link to="/range">
					<button>{img3.text}</button>
				</Link>
			</div>
			<div className="grid-home-img grid-home-img-4">
				<img src={img4.img} alt="" />
				<Link to="/range">
					<button>{img4.text}</button>
				</Link>
			</div>
		</div>
	);
};

export default Grid;
