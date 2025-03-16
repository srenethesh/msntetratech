import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-blue-950 shadow-lg fixed w-full z-50 top-0"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        
        <motion.div
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/MSN_TetraTech_Company.png"
              alt="MSN TetraTech Logo"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white">
               MSN <span className="text-blue-400">TetraTech</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link
                to={item==="Home"? "/":  `/${item.toLowerCase()}`}
                className="text-white hover:text-blue-300 transition duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden bg-blue-900 absolute w-full left-0 transition-all duration-300 ${
          isOpen ? "top-16 opacity-100" : "top-[-200px] opacity-0"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="text-center py-4 space-y-4">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link
                to={item.toLowerCase()}
                className="text-white text-lg hover:text-blue-300 transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
