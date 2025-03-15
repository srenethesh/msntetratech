import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Modern, responsive, and high-performance websites built with the latest technologies.",
    icon: "🌐",
  },
  {
    title: "Mobile App Development",
    description: "Custom mobile applications for Android and iOS using Flutter and React Native.",
    icon: "📱",
  },
  {
    title: "E-Commerce Solutions",
    description: "Scalable and secure e-commerce platforms to boost your online business.",
    icon: "🛒",
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your business needs efficiently.",
    icon: "⚙️",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-blue-900 text-white py-16 px-6">
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Our <span className="text-blue-300">Services</span>
      </motion.h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-blue-900 rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="text-center mt-2 opacity-80">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
