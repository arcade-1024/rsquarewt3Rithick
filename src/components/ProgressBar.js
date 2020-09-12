import React from "react";

const ProgressBar = ({ completed }) => {
	const containerStyles = {
		height: 20,
		width: "100%",
		backgroundColor: "#e0e0de",
		// borderRadius: 50,
		marginTop: "-10px",
	};

	const fillerStyles = {
		height: "100%",
		width: `${completed}%`,
		backgroundColor: "#10c0ff",
		borderRadius: "inherit",
		textAlign: "right",
	};

	const labelStyles = {
		padding: 5,
		color: "white",
		fontWeight: "bold",
	};
	return (
		<div style={containerStyles}>
			<div style={fillerStyles}>
				<span style={labelStyles}></span>
			</div>
		</div>
	);
};

export default ProgressBar;
