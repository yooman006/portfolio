import React, { useRef, useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import contactAnimation from "../assets/lottie/contact-animation.json";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { styled } from "@mui/system";

// Styled TextField with autofill override
const StyledTextField = styled(TextField)({
  "& label": { color: "#ccc" },
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#06b6d4",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#06b6d4",
    },
  },
  "& input:-webkit-autofill": {
    boxShadow: "0 0 0 1000px #12172a inset",
    WebkitTextFillColor: "#fff",
  },
});

const ContactMeSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_qypmw5h",
        "template_boru978",
        form.current,
        "8Yaf8Q6LEX1E93Awz"
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-10 bg-gradient-to-br from-[#0a0f1e] to-[#1e293b] text-white">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 py-20">

        {/* Lottie Animation */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Lottie animationData={contactAnimation} loop={true} />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full md:w-1/2 bg-[#12172a] p-8 rounded-xl shadow-xl border border-cyan-500 shadow-cyan-500/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography
            variant="h4"
            gutterBottom
            className="text-center text-cyan-400 font-semibold"
          >
            📬 Contact Me
          </Typography>
          <div className="text-center text-cyan-100 font-semibold text-sm">
  barathvikraman6523@gmail.com
</div>

         
          {/* Social Icons */}
          <div className="flex justify-center space-x-5 pt-6 text-xl text-white">
            <a
              href="https://www.linkedin.com/in/barath-vikraman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-cyan-400 transition" />
            </a>
            <a
              href="https://github.com/yooman006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMeSection;
