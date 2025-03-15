import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-blue-950 text-white py-10 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-blue-300">MSN TetraTech</h2>
          <p className="text-gray-300 mt-2">
            Innovating technology solutions for a digital future.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-blue-300">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:text-white transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="flex flex-col items-center md:items-start"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-blue-300">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>© {new Date().getFullYear()} MSN TetraTech. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
