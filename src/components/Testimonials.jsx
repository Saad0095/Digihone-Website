import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Brand1 from "../assets/Images/brand1.svg";
import Brand2 from "../assets/Images/brand2.svg";
import Brand3 from "../assets/Images/brand3.svg";
import Brand4 from "../assets/Images/brand4.svg";

const brandsLogos = [
  { name: "Brand One", icon: Brand1 },
  { name: "Brand Two", icon: Brand2 },
  { name: "Brand Three", icon: Brand3 },
  { name: "Brand Four", icon: Brand4 },
];
const Testimonials = () => {
  return (
    <div className="px-5 py-16 bg-background text-white gap-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-10 leading-normal">
        <span className="text-primary">Trusted by B2B Companies </span>
        Who Hate {" "}
        <br className="hidden md:block"/>
        Wasting Time on Unqualified Leads
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="w-2/3 mx-auto"
      >
        {brandsLogos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-40"
          >
            <img
              src={logo.icon}
              alt={logo.name}
              className="max-h-20 object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
