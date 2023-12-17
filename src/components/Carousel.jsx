import React from "react";
import IMG1 from "../assets/Frame 12.png";
import IMG2 from "../assets/Frame 9.png";
import IMG3 from "../assets/Frame 10.png";
import IMG4 from "../assets/Frame 11.png";
import IMG5 from "../assets/Frame 13.png";

const Carousel = () => {
	return (
		<div className="hidden md:flex w-full flex-col items-center justify-center mb-[5rem]">
			<div className="mt-[5rem] mb-[3.75rem] gap-8 flex justify-evenly overflow-clip">
				<img src={IMG1} alt="image-1" />
				<img src={IMG2} alt="image-2" />
				<img src={IMG3} alt="image-3" />
				<img src={IMG4} alt="image-4" />
				<img src={IMG5} alt="image-5" />
			</div>
			<button className="border border-[#4B5563] text-[#4B5563] font-bold rounded-xl mr-12 py-4 px-8">
				View recent work
			</button>
		</div>
	);
};

export default Carousel;
