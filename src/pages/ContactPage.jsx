import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

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
          Get in <span className="text-blue-300">Touch</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          We're here to help. Contact us for any inquiries or collaborations.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-950">Contact Information</h2>
            <p className="text-gray-700">
              Have questions? Reach out to us anytime!
            </p>
            <div className="text-gray-800">
              <p>📍 Madurai, TamilNadu, India</p>
              <p>📞 Phone: +91 9080835402</p>
              <p>✉️ Email: srenetheshmahendren@gmail.com</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-blue-100 p-6 rounded-lg shadow-md space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-blue-950">Send Us a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-blue-950 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;
