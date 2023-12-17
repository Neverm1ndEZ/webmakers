import React from "react";
import { tickd, tickl, tickw } from "../assets/index";
// import background from "../assets/footer.png";

const offerings = [
	{
		id: 0,
		offer: "20,000+ of PNG & SVG graphics",
	},
	{
		id: 1,
		offer: "Access to 100 million stock images",
	},
	{
		id: 2,
		offer: "Upload custom icons and fonts",
	},
	{
		id: 3,
		offer: "Unlimited Sharing",
	},
	{
		id: 4,
		offer: "Upload graphics & video in up to 4k",
	},
	{
		id: 5,
		offer: "Unlimited Projects",
	},
	{
		id: 6,
		offer: "Instant Access to our design system",
	},
	{
		id: 7,
		offer: "Create teams to collaborate on designs",
	},
];

const Support = () => {
	return (
		<div
			className="pt-[6rem] flex flex-col justify-center items-center"
			// style={{
			// 	background: `url(${background}) center/cover no-repeat, lightgray 60%`,
			// }}
		>
			<h1 className="text-center leading-[3.25rem] px-12 text-[2.625rem] md:text-[3.25rem] font-bold text-[#262E35] mb-4">
				Pricing made for collaborative support.
			</h1>
			<p className="text-base md:text-xl text-[#6B7280] font-medium text-center mb-[3rem] lg:px-28 md:px-12 px-[4.5rem]">
				Plain is made for your entire company. Only pay for users that actually
				message customers. Everyone else is free, forever.
			</p>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[5rem] mx-2">
				<div className="px-6 py-10 border border-[#E5E7EB] rounded-xl text-left max-w-sm">
					<h1 className="text-[#191D23] text-2xl mb-3 font-bold">Freebie</h1>
					<p className="text-base font-medium pr-8 text-[#6B7280] mb-5">
						Ideal for individuals who need quick access to basic features.
					</p>
					<p className="text-[#1F2937] text-[3.5rem] font-medium">
						$0
						<span className="text-[#4B5563] text-base align-middle pb-6">
							/ Month
						</span>
					</p>
					<button className="border border-[#4B5563] text-[#4B5563] font-bold rounded-xl w-full py-2 px-12 mb-10">
						Get Started Now
					</button>
					<ul className="flex flex-col">
						{offerings.slice(0, 2).map(({ id, offer }) => (
							<li key={id} className="flex items-center mb-3">
								<img src={tickd} alt="icon" className="mr-2" />
								<p className="text-base font-medium text-[#1F2937]">{offer}</p>
							</li>
						))}
					</ul>
					<ul className="flex flex-col">
						{offerings.slice(2, 8).map(({ id, offer }) => (
							<li key={id} className="flex items-center mb-3">
								<img src={tickl} alt="icon" className="mr-2 " />
								<p className="text-base font-medium text-[#9CA3AF]">{offer}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="px-6 py-10 bg-[#1F2937] border border-[#E5E7EB] rounded-xl text-left max-w-sm shadow">
					<h1 className="text-2xl font-bold mb-3 text-white">Professional</h1>
					<p className="text-base font-medium mb-5 text-white">
						Ideal for individuals who who need advanced features and tools for
						client work.
					</p>
					<p className="text-[3.5rem] font-medium text-white">
						$25
						<span className="text-base align-middle pb-6 text-white">
							/ Month
						</span>
					</p>
					<button className="bg-[#F9FAFB] text-[#1F2937] border border-[#4B5563] font-bold rounded-xl w-full py-2 px-12 mb-10">
						Get Started Now
					</button>
					<ul className="flex flex-col">
						{offerings.slice(0, 5).map(({ id, offer }) => (
							<li key={id} className="flex items-center mb-3 ">
								<img src={tickw} alt="icon" className="mr-2" />
								<p className="text-base font-medium text-white">{offer}</p>
							</li>
						))}
					</ul>
					<ul className="flex flex-col">
						{offerings.slice(5, 8).map(({ id, offer }) => (
							<li key={id} className="flex items-center mb-3 ">
								<img src={tickl} alt="icon" className="mr-2" />
								<p className="text-base font-medium text-[#9CA3AF]">{offer}</p>
							</li>
						))}
					</ul>
				</div>
				<div className="px-6 py-10 border border-[#E5E7EB] rounded-xl text-left max-w-sm">
					<h1 className="text-[#191D23] text-2xl font-bold mb-3">Enterprise</h1>
					<p className="text-base font-medium text-[#6B7280] mb-5">
						Ideal for businesses who need personalized services and security for
						large teams.
					</p>
					<p className="text-[#1F2937] text-[3.5rem] font-medium">
						$100
						<span className="text-[#4B5563] text-base align-middle pb-6">
							/ Month
						</span>
					</p>
					<button className="border border-[#4B5563] text-[#4B5563] font-bold rounded-xl w-full py-2 px-12 mb-10">
						Get Started Now
					</button>
					<ul className="flex flex-col">
						{offerings.map(({ id, offer }) => (
							<li key={id} className="flex items-center mb-3">
								<img src={tickd} alt="icon" className="mr-2" />
								<p className="text-base font-medium text-[#1F2937]">{offer}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Support;
