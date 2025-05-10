import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { assets } from "../assets/assets";

const ExperienceSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "rgb(37, 128, 159)", color: "#fff", py: 10, px: { xs: 2, sm: 4, md: 8 } }}>
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#00FF99",
            textAlign: "center",
            mb: 2
          }}
        >
          <span style={{ color: "#00FF99" }}>#</span> Experience
        </Typography>
        <Box
          sx={{
            width: "80px",
            height: "4px",
            backgroundColor: "#00FF99",
            mx: "auto",
            mb: 6,
            borderRadius: 2
          }}
        />
      </motion.div>

      {/* Timeline Block */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={isMobile ? "column" : "row"}
      >
        {/* Role Info */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                border: "1px solid #00FF99",
                borderRadius: 2,
                p: 3,
                background: "#111",
                boxShadow: "0 0 20px rgba(0,255,153,0.1)",
                textAlign: isMobile ? "center" : "left"
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#00FF99", fontFamily: "monospace", mb: 1 }}
              >
                <span style={{ marginRight: 8 }}>$</span> Cyber Security Intern
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                January 2025 — April 2025
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Timeline Icon */}
        <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {!isMobile && (
                <Box sx={{ width: 2, height: "60px", backgroundColor: "#00FF99" }} />
              )}
              <Avatar
                sx={{
                  bgcolor: "#00FF99",
                  width: 40,
                  height: 40,
                  mt: -2,
                  mb: -2,
                  boxShadow: "0 0 15px rgba(0,255,153,0.5)"
                }}
              >
                <WorkOutlineIcon sx={{ color: "#000" }} />
              </Avatar>
              {!isMobile && (
                <Box sx={{ width: 2, height: "60px", backgroundColor: "#00FF99" }} />
              )}
            </Box>
          </motion.div>
        </Grid>

        {/* Company Info */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                border: "1px solid #00FF99",
                borderRadius: 2,
                p: 3,
                background: "#111",
                textAlign: "center"
              }}
            >
              <Box
                component="img"
                src={assets.izapy}
                alt="IZAPY Logo"
                sx={{
                  width: "100%",
                  maxWidth: "150px",
                  mx: "auto",
                  mb: 2,
                  p: 1,
                  border: "1px solid #00FF99",
                  borderRadius: 1
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
                IZAPY
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Singapore (Remote)
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
      {/* New Experience: Siva Digital */}
<Grid
  container
  spacing={4}
  alignItems="center"
  justifyContent="center"
  direction={isMobile ? "column" : "row"}
  sx={{ mt: 6 }}
>
  {/* Role Info */}
  <Grid item xs={12} md={5}>
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          border: "1px solid #00FF99",
          borderRadius: 2,
          p: 3,
          background: "#111",
          boxShadow: "0 0 20px rgba(0,255,153,0.1)",
          textAlign: isMobile ? "center" : "left"
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#00FF99", fontFamily: "monospace", mb: 1 }}
        >
          <span style={{ marginRight: 8 }}>$</span> Web Developer Intern
        </Typography>
        <Typography variant="body2" sx={{ color: "#aaa" }}>
          December 2024 — April 2025
        </Typography>
      </Box>
    </motion.div>
  </Grid>

  {/* Timeline Icon */}
  <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {!isMobile && (
          <Box sx={{ width: 2, height: "60px", backgroundColor: "#00FF99" }} />
        )}
        <Avatar
          sx={{
            bgcolor: "#00FF99",
            width: 40,
            height: 40,
            mt: -2,
            mb: -2,
            boxShadow: "0 0 15px rgba(0,255,153,0.5)"
          }}
        >
          <WorkOutlineIcon sx={{ color: "#000" }} />
        </Avatar>
        {!isMobile && (
          <Box sx={{ width: 2, height: "60px", backgroundColor: "#00FF99" }} />
        )}
      </Box>
    </motion.div>
  </Grid>

  {/* Company Info */}
  <Grid item xs={12} md={5}>
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          border: "1px solid #00FF99",
          borderRadius: 2,
          p: 3,
          background: "#111",
          textAlign: "center"
        }}
      >
        {/* Add logo if available in your assets, e.g., assets.siva */}
        <Box
          component="img"
          src={assets.siva} // Make sure you add this image path in assets.js
          alt="Siva Digital Logo"
          sx={{
            width: "100%",
            maxWidth: "150px",
            mx: "auto",
            mb: 2,
            p: 1,
            border: "1px solid #00FF99",
            borderRadius: 1
          }}
        />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          Siva Digital
        </Typography>
        <Typography variant="body2" sx={{ color: "#bbb" }}>
          Chennai
        </Typography>
      </Box>
    </motion.div>
  </Grid>
</Grid>

    </Box>
  );
};

export default ExperienceSection;
