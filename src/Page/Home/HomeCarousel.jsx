import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { Images } from "../../data/Images";
const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "100%",
  textAlign: "center",
  background: "#364d79",
};

const HomeCarousel = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <section className="mt-[30%] max-md:w-[24rem] max-md:mt-[112%] w-[25%] mx-auto">
      <Carousel
        className="w-full"
        dots={"bg-black"}
        autoplay={true}
        autoplaySpeed={3000}
        afterChange={onChange}
      >
        {Images.map((i) => {
          return (
            <Link key={i.id}>
              <div style={contentStyle}>
                <img
                  className="h-[15rem] max-md:h-[11rem] w-full object-cover"
                  src={i.src}
                  alt={"image" + i.id}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </section>
  );
};
export default HomeCarousel;
