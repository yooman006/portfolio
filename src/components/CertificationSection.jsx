import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const certifications = [
  {
    title: "Java Programming",
    issuer: "Pantech e Learning",
    image: assets.java,
  },
  {
    title: "Python Programming",
    issuer: "Pantech e Learning",
    image: assets.python,
  },
  {
    title: "React JS",
    issuer: "Infosys | Springboard",
    image: assets.react,
  },
  {
    title: "SEO with Squarespace",
    issuer: "Coursera",
    image: assets.python,
  },
];

const cardVariants = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.2, rotate: 15, y: -100 },
};

const CertificationSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(48, 147, 181)",
        py: 10,
        px: 4,
        color: "#E0F7FA",
        position: "relative",
      }}
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#00e5ff",
              textShadow: "0 0 10px #00e5ff",
          }}
        >
          ⚡ Certifications
        </Typography>
        <Box
          sx={{
            width: "80px",
            height: "4px",
            backgroundColor: "#00BFFF",
            mx: "auto",
            mb: 6,
            borderRadius: 2,
            boxShadow: "0 0 12px #00BFFF",
          }}
        />
      </motion.div>

      {/* Certificate Cards */}
      <Grid container spacing={4} justifyContent="center">
        <AnimatePresence>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 45px #00bfffcc",
                }}
              >
                <Card
                  sx={{
                    background: "linear-gradient(135deg, #0a0a0a, #1e1f2f)",
                    border: "1px solid #00BFFF",
                    borderRadius: 4,
                    boxShadow: "0 0 25px #00bfff44", // subtle glowing shadow
                    overflow: "hidden",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={cert.image}
                    alt={`${cert.title} certificate`}
                    sx={{
                      width: "100%",
                      height: { xs: "200px", sm: "230px", md: "240px" },
                      objectFit: "contain",
                      p: 2,
                      borderBottom: "1px solid #00BFFF",
                      backgroundColor: "#111",
                      borderRadius: 2,
                      boxShadow: "0 0 20px #00bfffee", // glowing underlay for image
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "#00BFFF", fontWeight: "bold" }}
                    >
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#ccc" }}>
                      {cert.issuer}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#888" }}>
                      {cert.date}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default CertificationSection;
