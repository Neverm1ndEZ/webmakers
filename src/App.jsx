import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import HowItWorks from "./components/HowItWorks";
import Sysphus from "./components/Sysphus";
import Support from "./components/Support";
import FaQ from "./components/FAQ";
import Footer from "./components/Footer";

//TODO: ADD GRADIENT

const App = () => {
	return (
		<div className="">
			<div className="bg-gradient-to-r from-white to-white">
				<Nav />
				<Hero />
			</div>
			<Carousel />
			<HowItWorks />
			<Sysphus />
			<Support />
			<FaQ />
			<Footer />
		</div>
	);
};

export default App;
