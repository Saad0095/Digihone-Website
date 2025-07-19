import { motion } from "motion/react";
import ServiceImg1 from "../assets/Images/service1.svg";
import ServiceImg2 from "../assets/Images/service2.svg";
import ServiceImg3 from "../assets/Images/service3.svg";

const services = [
  {
    heading: "Email Prospecting",
    description:
      "Reach decision-makers with tailored, high-performing cold email campaigns",
    img: ServiceImg1,
  },
  {
    heading: "Cold Calling",
    description:
      "Turn dials into conversations and conversations into qualified meetings",
    img: ServiceImg2,
  },
  {
    heading: "LinkedIn Outreach",
    description:
      "Reach decision-makers with tailored, high-performing cold email campaigns",
    img: ServiceImg3,
  },
];

const Services = () => {
  return (
    <div className="px-5 py-16 bg-background text-white">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Your
          <span className="text-primary"> Full-Service Sales</span>{" "}
          <br className="hidden md:block" />
          Prospecting Agency
        </h1>
        <p className="md:w-2/3 text-center mx-auto mt-4 text-base">
          Digihone combines expert strategy, multi-channel outreach, and
          dedicated SDRs to execute outbound sales that drive pipeline growth.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3 mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-[#111B2A] rounded-2xl p-8 border-2 text-center ${
              index == 1 ? "border-primary shadow-inset" : "border-transparent"
            }`}
          >
            <h2 className="text-2xl md:text-2xl font-semibold mb-2">
              {service.heading}
            </h2>
            <p className="mb-4">{service.description}</p>
            <img src={service.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
