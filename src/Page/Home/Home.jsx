import React from "react";
import { TypeAnimation } from "react-type-animation";
import HomeCarousel from "./HomeCarousel";
const duration = 3000;
const Home = () => {
  return (
    <section>
      <div className="center font-bold uppercase  text-center absolute max-md:top-[33%] top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[white]">
        <p className="text-[4rem] max-md:text-[3rem]">MingSeng </p>
        <p className="text-[2.5rem] glitch -mt-[2rem] max-md:-mt-[.5rem] max-md:text-[.5rem]">
          <TypeAnimation
          className="max-md:text-[1rem] "
          
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Videographer",
              duration, // wait 1s before replacing "Mice" with "Hamsters"
              "Photographer",
              duration,
              "Graphic Designer"
              ,duration
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
      </div>
      <HomeCarousel />
      <div className="text-[white] max-md:text-[.5rem] max-md:top-[44%] max-md:-rotate-90 max-md:w-[20rem] max-md:-left-[8rem] uppercase text-[.8rem] items-center absolute top-[50%] -left-[10%] -rotate-90 flex w-[30rem] justify-between">
        <div className="flex flex-col items-center">
          <p>selected</p>
          <p>works</p>
        </div>
        <p>@2023</p>
      </div>
    </section>
  );
};

export default Home;
