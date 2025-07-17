import { motion } from "motion/react"

const services = [
  {
    heading: "Cold Email Outreach",
    description:
      "We don’t just send emails – we start conversations. Our team crafts hyper-personalized cold emails that cut through the noise and get replies.",
    features: [
      "Tailored email copy that speaks directly to your ideal customer.",
      "A/B testing to optimize open and reply rates.",
      "Automated follow-ups to keep the conversation alive.",
    ],
    cta: "Let’s Craft Your Winning Email Campaign",
  },
  {
    heading: "Cold Calling",
    description:
      "Our agents don’t just read scripts – they build relationships. We engage, qualify, and set appointments with decision-makers who are ready to talk.",
    features: [
      "Native-speaking agents who know how to connect.",
      "Custom call scripts that reflect your brand voice.",
      "Real-time lead qualification to ensure quality.",
    ],
    cta: "Hear a Sample Call",
  },
  {
    heading: "LinkedIn Outreach",
    description:
      "LinkedIn is a goldmine for B2B leads – and we know how to mine it. From connection requests to personalized InMails, we turn LinkedIn into your lead-generating powerhouse.",
    features: [
      "Targeted prospect list building.",
      "Customized messaging that sparks interest.",
      "Follow-up sequences to nurture relationships.",
    ],
    cta: "See LinkedIn Outreach in Action",
  },
  {
    heading: "Data Building",
    description:
      "Accurate data is the backbone of successful outreach. We build and maintain comprehensive prospect lists, ensuring your campaigns reach the right audience.",
    features: [
      "Prospect data building to target new markets.",
      "Customer database validation to keep your CRM up-to-date.",
      "Updating contact details and adding missing data such as email addresses and LinkedIn profiles for multi-channel targeting.",
    ],
    cta: "Enhance Your Data Quality Today",
  },
];

const Services = () => {
  return (
    <div className="px-5 py-16 bg-background text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-normal">
          Your Lead Generation Gameplan – <br className="hidden md:block" />
          <span className="text-primary">Designed to Win.</span>
        </h1>
        <p className="md:w-2/3 text-center mx-auto mt-4 text-base md:text-lg text-gray-300">
          We offer tailored strategies to drive real B2B growth.Each service is crafted to target the right audience, spark engagement, and deliver measurable results.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-[#111B2A] rounded-2xl p-6 border-2 border-transparent hover:shadow-xl hover:border-primary"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">
              {service.heading}
            </h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <ul className="text-sm text-gray-400 list-disc pl-5 space-y-1 mb-4">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="mt-auto bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">
              {service.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
