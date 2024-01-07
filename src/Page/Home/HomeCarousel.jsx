import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Images = [
  {
    id: 1,
    link: "",
    src: "https://zandokh.com/image/catalog/banner/2024/1st-purchase-banner.jpg",
  },
  {
    id: 2,
    link: "",
    src : "https://zandokh.com/image/catalog/banner/2023/fall-winter/APP9.jpg"
  },
];
const HomeCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <section className="mt-[70%] w-[50%] mx-auto">
      <Carousel dots={"bg-black"} autoplay={false} autoplaySpeed={2000} afterChange={onChange}>
        {
          Images.map(i => {
            return (
              <Link key={i.id}>
                <div style={contentStyle}>
                  <img src={i.src} alt={"image"+i.id} />
                </div>
              </Link>
            )
          })
        }
      </Carousel>
    </section>
  );
};
export default HomeCarousel;
