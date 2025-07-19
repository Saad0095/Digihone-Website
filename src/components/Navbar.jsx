import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center mx-auto">
      <div
        className={`bg-white text-black p-5 flex items-center justify-between shadow-md fixed top-0 z-50 w-[94%] ${
          isOpen ? "rounded-none" : "rounded-b-2xl"
        } md:rounded-b-2xl`}
      >
        {/* Logo */}
        <div className="text-xl md:text-4xl font-extrabold">
          Digihone<span className="text-primary">.</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-primary transition duration-150 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <a
            href="#contact"
            className="bg-white text-black border-2 border-black hover:text-primary px-6 py-3 rounded-md transition duration-300 cursor-pointer font-medium"
          >
            Schedule a Consult
          </a>
          <a
            href="#contact"
            className="bg-primary text-black border-2 border-primary hover:text-primary hover:bg-white px-6 py-3 rounded-md transition duration-300 cursor-pointer font-medium"
          >
            Request Info
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer p-2 rounded border-2 ${
              isOpen
                ? "border-primary text-primary"
                : "border-transparent"
            }`}
          >
            <FaBars />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 w-full bg-white text-black flex flex-col gap-6 px-6 py-4 md:hidden shadow-lg rounded-b-2xl"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-primary transition duration-150 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white text-black border-2 border-black hover:text-primary transition duration-300 cursor-pointer font-medium px-4 py-3 text-center rounded-md w-full"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Consult
              </a>
              <a
                href="#contact"
                className="bg-primary text-black border-2 border-primary hover:text-primary hover:bg-white transition duration-300 cursor-pointer font-medium px-4 py-3 text-center rounded-md w-full"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
