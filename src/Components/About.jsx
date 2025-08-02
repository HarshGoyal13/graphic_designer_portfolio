import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay },
    },
  };
  return variants;
};

const AboutSection = () => {
  return (
  <section className="py-24 bg-black archivo-black-regular text-white" id="about">
  <div className="max-w-6xl mx-auto px-4">
    <div className="max-w-[1000px] w-full">

      {/* Title Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn("down", 0)}
        className="flex mb-6 max-w-[500px] items-center gap-4"
      >
        <h3 className="text-4xl font-semibold text-blue-500">ABOUT</h3>
        <div className="bg-gradient-to-r from-blue-500 to-blue-400 min-w-[150px] h-px shadow-blue-500/50 shadow-md"></div>
      </motion.div>

      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn("down", 0.2)}
        className="mb-6"
      >
        <h2 className="text-3xl font-bold text-white">GET TO KNOW ME</h2>
        <p className="mt-2 text-sm text-blue-400">Passionate. Creative. Focused on results.</p>
      </motion.div>

      {/* Paragraph */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn("right", 0.4)}
        className="text-[clamp(0.85rem,0.75rem+0.3vw,1rem)] leading-relaxed text-gray-300"
      >
    <p>
  Hi I'm <span className="font-semibold text-blue-400">Ishita</span>, a graphic designer.<br /><br />
  Equipped with expertise in <span className="font-semibold text-blue-400">Illustrator, Photoshop, SketchUp, Lumion, Enscape, ZBrush, KeyShot, sketching, drawing, and perspective color design</span>.<br /><br />
  <span className="font-semibold text-blue-400">Proficient in billboard and brochure design, posters, textures, and rendering</span>. Experienced in both macOS and Windows environments.<br /><br />
  <span className="font-semibold text-blue-400">Capable of creating unique promotional designs, layouts, and visual presentations</span> tailored to client needs.
</p>

      </motion.div>

    </div>
  </div>
</section>

  );
};

export default AboutSection;
