import React from "react";
import Card from "./../shared/Card";
import { IoIosSunny, IoMdPartlySunny } from "react-icons/io";
import { AiFillCloud } from "react-icons/ai";
import { BsFillCloudLightningRainFill } from "react-icons/bs";

const WeatherDetails = () => {
	return (
		<>
			<div className='flex justify-center items-center my-4 text-white '>
				<div className='card w-96 bg-gray-600 shadow-xl rounded-m '>
					<Card>
						<div className='card-body'>
							<h2 className='card-title'>Weather</h2>
							<IoIosSunny /> <IoMdPartlySunny /> <AiFillCloud /> <BsFillCloudLightningRainFill />
							<p className='capitalize'>Jaipur</p>
							<div className='card-actions justify-end'>
								<button className='text-white'>C</button>
								<button className='text-white'>F</button>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default WeatherDetails;
