import React from "react";
import Accordian from "./Accordian";

const FaQ = () => {
	return (
		<div className="mt-[4.62rem]">
			<h1 className="text-[2.625rem] lg:text-[3.625rem] text-[#101828] font-bold text-center">
				Frequently asked questions
			</h1>
			<p className="text-base mx-28 md:mx-0 lg:text-[1.25rem] text-[#667085] font-medium text-center">
				Everything you need to know about the product and billing.
			</p>
			<div className="flex flex-col justify-center items-center my-[4rem] px-[5rem] md:px-[12rem] lg:px-[22rem]">
				<Accordian />
			</div>
		</div>
	);
};

export default FaQ;
