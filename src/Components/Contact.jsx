import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FaMobileAlt, FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { ClipLoader } from "react-spinners";

export default function ContactSection() {
  const formInitialDetails = {
    Fullname: '',
    email: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });

      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (response.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setButtonText("Send");
      setStatus({ success: false, message: "Something went wrong. Please try again later." });
    }
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex items-center gap-4 mb-6" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h3 className="text-3xl font-semibold text-white">CONTACT</h3>
          <div className="flex-1 h-px bg-blue-500"></div>
        </motion.div>

        <motion.div className="mb-10" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h2 className="text-xl font-medium">LET'S KEEP IN TOUCH</h2>
          <p className="text-base mt-1 text-blue-300">I look forward to hearing from you soon.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start justify-around gap-12 mt-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md p-4">
            <motion.input
              type="text"
              placeholder="Full Name"
              required
              value={formDetails.Fullname}
              onChange={(e) => onFormUpdate("Fullname", e.target.value)}
              className="p-2 bg-transparent text-white placeholder-blue-300 border-2 border-blue-500 rounded"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.input
              type="email"
              placeholder="Email Address"
              required
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              className="p-2 bg-transparent text-white placeholder-blue-300 border-2 border-blue-500 rounded"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.textarea
              placeholder="Message"
              rows="6"
              required
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="p-2 bg-transparent text-white placeholder-blue-300 border-2 border-blue-500 rounded"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
   <motion.div
  className="relative group"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
>
  <div className="absolute w-[30px] h-[30px] -top-2 -left-2 border-t-4 border-l-4 border-blue-500 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>
  <div className="absolute w-[30px] h-[30px] -bottom-2 -right-2 border-b-4 border-r-4 border-blue-500 transition-all duration-500 group-hover:w-full group-hover:h-full -z-10"></div>

  <button
    type="submit"
    disabled={buttonText === "Sending..."}
    className="w-full flex justify-center items-center gap-2 bg-blue-500 text-black py-2 font-semibold relative z-10 disabled:opacity-70 disabled:cursor-not-allowed"
  >
    {buttonText === "Sending..." ? (
      <ClipLoader color="black" size={20} />
    ) : (
      "Send"
    )}
  </button>
</motion.div>



            {status.message && (
              <p className={`mt-2 ${status.success ? "text-green-400" : "text-red-400"}`}>
                {status.message}
              </p>
            )}
          </form>

          <div className="flex flex-col gap-8 text-white">
            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <FaMobileAlt className="text-xl" />
              <p><b>Phone Number</b><br />+91 9311270195</p>
            </motion.div>

            <motion.div className="flex items-center gap-4" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <FaMapMarkerAlt className="text-xl" />
              <p><b>Address</b><br />India, Delhi</p>
            </motion.div>

            <motion.a href="mailto:Ishitaaa2209@gmail.com" className="flex items-center gap-4 text-white" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <FaEnvelope className="text-xl" />
              <p><b>Email</b><br />Ishitaaa2209@gmail.com</p>
            </motion.a>

            {/* <motion.a href="https://www.linkedin.com/in/dan-henly-benig-86a5ab16a" className="flex items-center gap-4 text-white" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <FaLinkedin className="text-xl" />
              <p><b>Linkedin</b><br />Dan Henly Benig</p>
            </motion.a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
