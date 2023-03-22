import React from "react";
import Input from "../shared/Input";
const SearchCity = () => {
	const onSearchCityHandler = (city) => {
		console.log(city);
	};
	return (
		<div>
			<div className=" my-10 rounded-m ">
				<Input
					type="text"
					placeholder="Type your city name"
					className="input w-full max-w-xs"
					onChange={onSearchCityHandler}
				/>
			</div>
		</div>
	);
};

export default SearchCity;
