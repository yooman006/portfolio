import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Chip
} from "@mui/material";
import { motion } from "framer-motion";
import { assets } from "../assets/assets"; // images should be stored here

const projects = [
    {
        title: "YooFoods",
        description: [
            "YooFoods is a responsive food ordering web application built with React.js.",
            "Users can browse a variety of food items, add them to a cart, and place orders seamlessly.",
            "Features a clean user interface, efficient state management, and a smooth user experience.",
        ],
        image: assets.food,
        tech: ["React", "Material UI", "MongoDB", "React Toast"],
        link: "https://yoofood.netlify.app/",
    },
];

const ProjectSection = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
                py: 10,
                px: 4,
                color: "#e0f7fa",
            }}
        >
            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
                    🚀 Projects
                </Typography>
                <Box
                    sx={{
                        width: "80px",
                        height: "4px",
                        backgroundColor: "#00e5ff",
                        mx: "auto",
                        mb: 6,
                        borderRadius: 2,
                    }}
                />
            </motion.div>

            {/* Project Cards */}
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <Card
                                    sx={{
                                        background: "rgba(255, 255, 255, 0.05)",
                                        backdropFilter: "blur(8px)",
                                        border: "1px solid #00e5ff55",
                                        borderRadius: 4,
                                        overflow: "hidden",
                                        transition: "transform 0.3s ease",
                                        "&:hover": {
                                            transform: "scale(1.03)",
                                            boxShadow: "0 0 30px rgba(0,229,255,0.5)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={project.image}
                                        alt={project.title}
                                        sx={{
                                            objectFit: "cover",
                                            height: { xs: "200px", sm: "240px", md: "260px" },
                                            borderBottom: "1px solid #00e5ff33",
                                            borderRadius: 1
                                        }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{ fontWeight: "bold", color: "#00e5ff", mb: 1 }}
                                        >
                                            {project.title}
                                        </Typography>

                                        <Box component="ul" sx={{ pl: 2, color: "#ccc", mb: 2 }}>
                                            {project.description.map((point, i) => (
                                                <li key={i} style={{ marginBottom: "6px" }}>
                                                    <Typography variant="body2">
                                                        {point}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </Box>

                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                            {project.tech.map((tag, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: "#004d66",
                                                        color: "#00e5ff",
                                                        fontWeight: "bold",
                                                        fontSize: "0.75rem",
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProjectSection;
