import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <motion.section
        className="relative bg-blue-950 text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-blue-300">MSN TetraTech</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a leading technology company specializing in web & mobile
          development, digital transformation, and custom software solutions.
        </p>
      </motion.section>

      {/* Company Achievements */}
      <motion.section
        className="py-16 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { count: "50+", label: "Projects Completed" },
            { count: "20+", label: "Happy Clients" },
            { count: "3+", label: "Years of Experience" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-3xl font-bold text-blue-950">{item.count}</h2>
              <p className="text-lg">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Mission & Vision */}
      <motion.section
        className="py-16 bg-gray-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is to empower businesses with cutting-edge technology
            solutions. We strive for innovation, excellence, and delivering
            seamless user experiences.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
