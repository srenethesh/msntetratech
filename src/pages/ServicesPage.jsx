import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  {
    title: "Web Development",
    description:
      "We build fast, scalable, and secure web applications tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating powerful mobile applications for Android & iOS with a seamless user experience.",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Custom-built software to enhance your business operations with efficiency and innovation.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce solutions, from UI/UX design to secure payment integrations.",
  },
  {
    title: "Digital Transformation",
    description:
      "Helping businesses transition into the digital world with innovative technology solutions.",
  },
];

const ServicesPage = () => {
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
          Our <span className="text-blue-300">Services</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering businesses with innovative technology solutions.
        </p>
      </motion.section>

      {/* Services List */}
      <motion.section
        className="py-16 max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 p-6 rounded-lg shadow-md text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-2xl font-bold text-blue-950 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-gray-100 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-950 mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-lg text-gray-700">
          Get in touch with us to discuss your project requirements.
        </p>
        <motion
          className="mt-6 inline-block bg-blue-950 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-800 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/contact">
              Contact Us
          </Link>
        </motion>
      </motion.section>
    </div>
  );
};

export default ServicesPage;
