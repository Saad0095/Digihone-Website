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
    <nav className="bg-white text-black px-4 md:px-8 h-20 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold">Digihone Website</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-primary transition duration-150"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="hidden md:flex bg-primary text-white border-2 border-primary hover:text-primary hover:bg-white px-6 py-3 rounded-md transition duration-300 cursor-pointer">
        <a href="#contact">Contact Us</a>
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
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
            className="absolute top-20 left-0 w-full bg-background text-white flex flex-col gap-6 px-6 py-4 md:hidden shadow-lg"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 transition w-max"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
