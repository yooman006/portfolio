import React from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const AboutMe = () => {
  return (
    <section className="bg-black text-white px-4 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">About Me</h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
            I'm <span className="text-orange-500 font-semibold">Barath Vikraman</span>,
            a passionate Web Developer . I enjoy building responsive,
            high-performing websites and staying up-to-date with the latest security practices.
            My goal is to create user-friendly and secure digital experiences that make a difference.
          </p>

          <div className="pt-4">
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
