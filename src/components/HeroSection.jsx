import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundColor: "rgb(7, 119, 157)",
        color: "#E0F7FA",
        minHeight: "100vh",
        padding: "3rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">

        {/* Left Section */}
        <motion.div
          className="flex-1 space-y-5 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile View */}
          <div className="flex items-center gap-4 md:hidden">
            <img
              src={assets.mine}
              alt="Barath Vikraman"
              className="w-[80px] h-[80px] object-cover rounded-full border-2 border-orange-500 shadow-lg"
              style={{ objectPosition: "center 30%" }}
            />
            <div>
              <p className="text-gray-300 text-sm">Hi I am</p>
              <h1 className="text-xl font-semibold text-white">Barath Vikraman</h1>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <p className="text-gray-400 text-lg">Hi I am</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white ">
              Barath Vikraman
            </h1>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-orange-400 ">
            Web Developer / Cyber Enthusiast
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-5 text-2xl text-white pt-2">
            <a href="https://www.linkedin.com/in/barath-vikraman/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-orange-400 transition duration-300" />
            </a>
            <a href="https://github.com/yooman006" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-orange-400 transition duration-300" />
            </a>
          </div>

          {/* Buttons */}
          <Stack direction="row" spacing={2} pt={2}>
            <a href="#contact">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f97316",
                  "&:hover": { backgroundColor: "#ea580c" },
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  boxShadow: "0 0 12px rgba(249,115,22,0.6)",
                }}
              >
                Hire Me
              </Button>
            </a>

            <a href="/barath.pdf" download>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#ffffff",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    color: "#000000",
                  },
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "8px",
                }}
              >
                Download CV
              </Button>
            </a>

          </Stack>

          {/* Stats */}
          <div className="flex space-x-8 pt-6">
            <div>
              <p className="text-orange-400 text-2xl font-bold">2+</p>
              <p className="text-gray-300 text-sm">Projects done</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section Image */}
        <motion.div
          className="hidden md:flex flex-1 justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={assets.mine}
            alt="Barath Vikraman"
            className="w-[400px] h-[540px] rounded-[120px] object-cover shadow-[0_0_40px_rgba(0,191,255,0.4)]"
            style={{ objectPosition: "center 25%" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
