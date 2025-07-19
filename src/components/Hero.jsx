import { motion } from "motion/react";
import HeroImg from "../assets/Images/HeroImg.svg";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-background text-white flex flex-col-reverse md:flex-row items-center md:items-center justify-center gap-10 pb-12 md:pb-24 pt-32">
      {/* Text Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left p-4"
        initial="hidden"
        animate="visible"
      >
        <h4 className="text-primary font-semibold text-lg tracking-[8px]">COLD CALLING</h4>
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide"
          variants={textVariants}
          custom={1}
        >
          Turn Cold Leads into Hot Opportunities –{" "}
          <br className="hidden md:block" />
          <span className="text-primary">Without Lifting a Finger.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white leading-relaxed"
          variants={textVariants}
          custom={2}
        >
          From lead generation to walk-through appointments, we’ve got your sales pipeline covered.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-4 inline-block bg-primary text-white text-xl font-semibold px-6 py-3 rounded-md w-max mx-auto md:mx-0 hover:text-[#108b7a] duration-300" 
          variants={textVariants}
          custom={3}
          whileTap={{ scale: 0.95 }}
        >
          Get Qualified Leads Now
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-end mb-10 md:mb-0 p-4"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src={HeroImg}
          alt="Lead generation illustration"
          className="w-full max-w-md"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
