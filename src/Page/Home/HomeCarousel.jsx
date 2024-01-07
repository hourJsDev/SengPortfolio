import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "100%",
  textAlign: "center",
  background: "#364d79",
};
const Images = [
  {
    id: 1,
    link: "",
    src: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t39.30808-6/415511509_715601060546510_7596665559392325394_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=100&ccb=1-7&_nc_sid=ab7367&_nc_ohc=bQ5KNeLcEO0AX-hJHTK&_nc_ht=scontent.fpnh1-1.fna&oh=00_AfChVkgb1Dh2cDsHOCP0IFA8mywIX-GnCyTHEVMRjWAeXQ&oe=659FE4F7",
  },
  {
    id: 2,
    link: "",
    src : "https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/415972238_715601087213174_6410209589159271568_n.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=ab7367&_nc_ohc=jD4ZoOj39XwAX-fis4T&_nc_ht=scontent.fpnh1-2.fna&oh=00_AfAc4j5IOAm25nrrUEsDENHuKsFzGkEeFxchCDUWf_y_Sw&oe=659EA897"
  },
];
const HomeCarousel = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
  return (
    <section className="mt-[28%] max-md:w-[15rem] max-md:mt-[90%] h-[10rem] w-[25%] mx-auto">
      <Carousel className="w-full" dots={"bg-black"} autoplay={false} autoplaySpeed={2000} afterChange={onChange}>
        {
          Images.map(i => {
            return (
              <Link key={i.id}>
                <div style={contentStyle}>
                  <img className="h-full w-full object-cover" src={i.src} alt={"image"+i.id} />
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
