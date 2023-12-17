import React from "react";
import {
	twitter,
	linkedin,
	facebook,
	github,
	victory,
	dribble,
} from "../assets/index";
import background from "../assets/footer.png";

const Footer = () => {
	return (
		<div
			className="pt-[12rem]"
			style={{
				background: `url(${background}) center/cover no-repeat, lightgray 60%`,
			}}
		>
			<h1 className="text-[2.625rem] md:text-[3.25rem] lg:text-[4.5rem] text-[#101828] text-center font-black px-[1.5rem] md:px[13rem] lg:px-[21rem] mb-4">
				No long-term contracts. No catches. Simple.
			</h1>
			<p className="text-[#667085] text-xl font-medium mb-[6.5rem] text-center">
				Start your 30-day free trial. Cancel anytime.
			</p>
			<div className="mx-[2rem] md:mx-[7rem] py-8 border-t-2 border-slate-300">
				<h1 className="text-3xl font-bold text-[#374151] mb-3">UniCraft</h1>
				<p className="md:text-lg text-[#9CA3AF] font-medium md:w-[60%] mb-8">
					Design amazing digital experiences that create more happy in the
					world.
				</p>
				<div className="flex justify-between items-center">
					<p className="text-[#98A2B3]">
						© 2077 Untitled UI. All rights reserved.
					</p>
					<div className="grid grid-cols-3 md:grid-cols-6 gap-4">
						<>
							<img src={twitter} alt="logo" />
						</>
						<>
							<img src={linkedin} alt="logo" />
						</>
						<>
							<img src={facebook} alt="logo" />
						</>
						<>
							<img src={github} alt="logo" />
						</>
						<>
							<img src={victory} alt="logo" />
						</>
						<>
							<img src={dribble} alt="logo" />
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
