import React from "react";

const Input = (props) => {
	const handleChange = (event) => {
		// console.log(event.target.value);
		props.onChange(event.target.value);
	};
	return (
		<div>
			<input
				{...props}
				onChange={handleChange}
			/>
		</div>
	);
};

export default Input;
