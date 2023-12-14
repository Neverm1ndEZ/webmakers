import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

//TODO: ADD GRADIENT

const App = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-white to-white">
        <Nav />
        <Hero />
      </div>
      <Carousel />
    </div>
  );
};

export default App;
