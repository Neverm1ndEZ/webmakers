import React from "react";
import { zapier, spotify, zoom, slack, amazon, adobe } from "../assets/index";

const Hero = () => {
	return (
		<div className="flex flex-col justify-center items-center max-w-[1140px] mx-auto text-center mt-8">
			<h1 className="text-[2.625rem] leading-[2.8125rem] mx-8 md:text-7xl md:leading-[5.3125rem] font-black text-[#1F2937]">
				Elevate Your Presence with Seamless Design and Innovation.
			</h1>
			<p className="mt-4 text-base mx-8 md:text-xl font-medium text-[#4B5563] mb-8">
				From strategic planning to digital presence, we&apos;re your dedicated
				partner in achieving solo success.
			</p>
			<button className="py-4 px-[2.12rem] bg-[#1F2937] text-[#F9FAFB] text-xl font-bold rounded-lg mb-[4.5rem] md:[5.75rem] lg:mb-[7.25rem]">
				View Pricing
			</button>
			<section className="">
				<h1 className="text-[#9CA3AF] text-center font-medium text-sm mb-5">
					Trusted By 250+ Companies
				</h1>
				<div className="flex flex-col md:flex md:flex-row md:justify-evenly items-center">
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={zapier} alt="logo" />
					</span>
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={spotify} alt="logo" />
					</span>
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={zoom} alt="logo" />
					</span>
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={slack} alt="logo" />
					</span>
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={amazon} alt="logo" />
					</span>
					<span className="md:px-2 px-7 py-3 mx-3">
						<img src={adobe} alt="logo" />
					</span>
				</div>
			</section>
		</div>
	);
};

export default Hero;
