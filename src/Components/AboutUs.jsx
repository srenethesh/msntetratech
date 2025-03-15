import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-blue-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About <span className="text-blue-300">MSN TetraTech</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          viewport={{ once: true }}
        >
          At <strong>MSN TetraTech</strong>, we specialize in <strong>web development,
          mobile applications, digital transformation, and custom software
          solutions.</strong> With a passion for innovation, we empower businesses
          with cutting-edge technology.
        </motion.p>

        {/* Animated Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "20+", label: "Happy Clients" },
            { value: "5+", label: "Years of Experience" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-blue-300">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.p
          className="text-lg font-semibold text-blue-300 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <strong>Your Vision. Our Innovation.</strong> Let’s build the future together.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutUs;
