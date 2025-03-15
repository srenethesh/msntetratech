import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-400 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full opacity-25 blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 md:px-12 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Welcome to <span className="text-white">MSN TetraTech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl opacity-90"
        >
          We bring your ideas to life with cutting-edge technology.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
