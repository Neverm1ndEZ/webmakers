import React from "react";

const HowItWorks = () => {
	return (
		<div className="flex justify-center items-center mb-[8rem]">
			<div className="relative w-[1260px] h-[535px] bg-white rounded-xl overflow-hidden border border-solid border-[#E5E7EB] shadow-sm">
				<div className="absolute top-[51px] left-[490px] font-bold text-[#1F2937] text-5xl text-center whitespace-nowrap">
					How it works
				</div>
				<p className="absolute top-[119px] left-[265px] font-medium text-[#4B5563] text-xl text-center">
					Premium designs, unlimited requests, super fast delivery, for one flat
					monthly fee.
				</p>
				<div className="w-[782px] h-[170px] left-[40px] absolute top-[277px]">
					<div className="flex flex-col w-[339px] items-center gap-[4px] absolute top-[64px] left-0">
						<img
							className="absolute w-[68px] h-[176px] top-[-93px] left-[130px]"
							alt="Element"
							src="https://c.animaapp.com/3RyeuerX/img/1@4x.png"
						/>
						<div className="relative self-stretch mt-[-1.00px] font-black text-[#1F2937] text-[2.5rem] text-center">
							Subscribe
						</div>
						<p className="relative self-stretch text-lg text-center font-medium text-[#6B7280]">
							Subscribe to a plan &amp; you’ll get an instant access to your
							private Slack channel.
						</p>
					</div>
					<div className="flex flex-col w-[383px] items-center gap-[4px] absolute top-[40px] left-[399px]">
						<img
							className="absolute w-[124px] h-[179px] top-[-73px] left-[130px]"
							alt="Element"
							src="https://c.animaapp.com/3RyeuerX/img/2.png"
						/>
						<div className="relative w-fit mt-[-1.00px] font-black text-[#1F2937] text-[2.5rem] text-center">
							Request
						</div>
						<p className="relative self-stretch text-lg text-center font-medium text-[#6B7280]">
							Submit any number of requests. We&#39;ll work through them, one at
							a time, ensuring consistent updates every 24-48 hours
						</p>
					</div>
					<img
						className="absolute w-[88px] h-[91px] top-0 left-[325px]"
						alt="Frame"
						src="https://c.animaapp.com/3RyeuerX/img/frame.png"
					/>
				</div>
				<div className="w-[398px] h-[163px] left-[822px] absolute top-[277px]">
					<div className="flex flex-col w-[339px] items-center gap-[4px] absolute top-[57px] left-[59px]">
						<img
							className="absolute w-[125px] h-[179px] top-[-93px] left-[106px]"
							alt="Element"
							src="https://c.animaapp.com/3RyeuerX/img/3.png"
						/>
						<div className="relative self-stretch mt-[-1.00px] font-black text-[#1F2937] text-[2.5rem] text-center">
							Revise
						</div>
						<p className="relative self-stretchtext-lg text-center font-medium text-[#6B7280]">
							Need changes? We guarantee unlimited revisions until you&#39;re
							200% satisfied.
						</p>
					</div>
					<img
						className="absolute w-[88px] h-[91px] top-0 left-0"
						alt="Frame"
						src="https://c.animaapp.com/3RyeuerX/img/frame-1.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
