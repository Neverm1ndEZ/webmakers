import React from "react";
import company from "../assets/company logo 1.5.png";
import avatar from "../assets/avatar.png";

const Sysphus = () => {
	return (
		<div className="hidden lg:block bg-[#F9FAFB] px-[5.62rem] py-[6rem]">
			<div className="mb-10 flex justify-center">
				<img src={company} alt="company-logo" />
			</div>
			<h1 className="text-[#1F2937] text-[3rem] font-bold text-center mb-[2.5rem]">
				We’ve been with unicraft to kick start every new project and can’t
				imagine working without it.
			</h1>
			<div className="mb-4 flex justify-center">
				<img src={avatar} alt="company-logo" />
			</div>
			<h1 className="text-[#101828] text-center text-lg font-medium">
				Candice Wu
			</h1>
			<p className="text-[#667085] text-center text-lg font-medium">
				Product Manager, Sisyphus
			</p>
		</div>
	);
};

export default Sysphus;
