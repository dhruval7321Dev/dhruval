import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function Portfolio() {

    const projects = [
        {
            title: "Ecommerce Website",
            tech: "React JS • Redux • MUI",

            image:
                "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop",

            description:
                "Modern ecommerce platform with cart, authentication and responsive UI.",

            color:
                "linear-gradient(to right,#0ea5e9,#6366f1)",
        },

        {
            title: "Portfolio Website",
            tech: "React JS • TypeScript",

            image:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",

            description:
                "Personal portfolio website with animated UI and responsive design.",

            color:
                "linear-gradient(to right,#ec4899,#8b5cf6)",
        },

        {
            title: "Admin Dashboard",
            tech: "React • Charts • API",

            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",

            description:
                "Enterprise dashboard with analytics, charts and API integration.",

            color:
                "linear-gradient(to right,#14b8a6,#0ea5e9)",
        },

        {
            title: "Hospital Management",
            tech: ".NET MVC • SQL Server",

            image:
                "https://images.unsplash.com/photo-1581091215367-59ab6dcef10b?q=80&w=1400&auto=format&fit=crop",

            description:
                "Hospital management system with patient records and reporting module.",

            color:
                "linear-gradient(to right,#f97316,#ef4444)",
        },

        {
            title: "Food Delivery App",
            tech: "React • Firebase • MUI",

            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",

            description:
                "Food ordering application with realtime order tracking and responsive layout.",

            color:
                "linear-gradient(to right,#22c55e,#14b8a6)",
        },

        {
            title: "CRM System",
            tech: "React • .NET API • SQL",

            image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",

            description:
                "Customer relationship management system for business operations.",

            color:
                "linear-gradient(to right,#6366f1,#ec4899)",
        },
    ];

    return (

        <Box
            sx={{
                minHeight: "100vh",

                background:
                    "linear-gradient(to bottom right,#ffffff,#f8fafc,#eef2ff)",

                py: {
                    xs: 6,
                    md: 10,
                },

                position: "relative",

                overflow: "hidden",
            }}
        >

            {/* TOP BLUR */}

            <Box
                sx={{
                    position: "absolute",

                    top: -100,
                    left: -100,

                    width: 280,
                    height: 280,

                    borderRadius: "50%",

                    background:
                        "linear-gradient(to right,#38bdf8,#6366f1)",

                    filter: "blur(120px)",

                    opacity: 0.2,
                }}
            />

            {/* BOTTOM BLUR */}

            <Box
                sx={{
                    position: "absolute",

                    bottom: -100,
                    right: -100,

                    width: 280,
                    height: 280,

                    borderRadius: "50%",

                    background:
                        "linear-gradient(to right,#ec4899,#8b5cf6)",

                    filter: "blur(120px)",

                    opacity: 0.2,
                }}
            />

            <Container maxWidth="xl">

                {/* HEADING */}

                <Box
                    sx={{
                        textAlign: "center",

                        mb: 8,
                    }}
                >

                    <Chip
                        label="My Work"

                        sx={{
                            background:
                                "linear-gradient(to right,#dbeafe,#ede9fe)",

                            color: "#2563eb",

                            fontWeight: 700,

                            mb: 3,
                        }}
                    />

                    <Typography
                        sx={{
                            fontWeight: 900,

                            lineHeight: 1.1,

                            fontSize: {
                                xs: "44px",
                                md: "72px",
                            },
                        }}
                    >

                        <Box
                            component="span"

                            sx={{
                                background:
                                    "linear-gradient(to right,#0ea5e9,#6366f1)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent",
                            }}
                        >
                            Featured
                        </Box>

                        &nbsp;

                        <Box
                            component="span"

                            sx={{
                                background:
                                    "linear-gradient(to right,#ec4899,#8b5cf6)",

                                WebkitBackgroundClip:
                                    "text",

                                WebkitTextFillColor:
                                    "transparent",
                            }}
                        >
                            Projects
                        </Box>

                    </Typography>

                    <Typography
                        sx={{
                            color: "#64748b",

                            mt: 3,

                            maxWidth: 700,

                            mx: "auto",

                            lineHeight: 1.9,

                            fontSize: {
                                xs: "15px",
                                md: "18px",
                            },
                        }}
                    >
                        Collection of modern web applications,
                        dashboards and enterprise projects built
                        using React JS, TypeScript, .NET MVC,
                        SQL Server and modern UI frameworks.
                    </Typography>

                </Box>

                {/* PROJECT GRID */}

                <Grid
                    container
                    spacing={4}
                >

                    {projects.map((project, index) => (

                        <Grid
                            size={{ xs: 12, sm: 6, lg: 4 }}
                            key={index}
                        >

                            <Card
                                sx={{
                                    borderRadius: "28px",

                                    overflow: "hidden",

                                    background: "#fff",

                                    boxShadow:
                                        "0 20px 50px rgba(0,0,0,0.05)",

                                    transition: "0.4s",

                                    height: "100%",

                                    "&:hover": {
                                        transform:
                                            "translateY(-10px)",

                                        boxShadow:
                                            "0 30px 70px rgba(0,0,0,0.12)",
                                    },
                                }}
                            >

                                {/* IMAGE */}

                                <Box
                                    sx={{
                                        position: "relative",

                                        overflow: "hidden",
                                    }}
                                >

                                    <Box
                                        component="img"

                                        src={project.image}

                                        alt={project.title}

                                        sx={{
                                            width: "100%",

                                            height: 240,

                                            objectFit: "cover",

                                            transition: "0.5s",

                                            "&:hover": {
                                                transform:
                                                    "scale(1.08)",
                                            },
                                        }}
                                    />

                                    {/* TOP TECH TAG */}

                                    <Chip
                                        label={project.tech}

                                        sx={{
                                            position: "absolute",

                                            top: 15,
                                            left: 15,

                                            background:
                                                "rgba(255,255,255,0.85)",

                                            backdropFilter:
                                                "blur(10px)",

                                            fontWeight: 700,
                                        }}
                                    />

                                </Box>

                                {/* CONTENT */}

                                <CardContent
                                    sx={{
                                        p: 3,
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            fontSize: "26px",

                                            color: "#0f172a",
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",

                                            mt: 2,

                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {/* BUTTONS */}

                                    <Stack
                                        direction="row"
                                        spacing={2}

                                        sx={{
                                            mt: 4,
                                        }}
                                    >

                                        <Button
                                            variant="contained"

                                            sx={{
                                                background:
                                                    project.color,

                                                borderRadius:
                                                    "14px",

                                                textTransform:
                                                    "none",

                                                px: 3,

                                                fontWeight: 700,

                                                boxShadow: "none",

                                                "&:hover": {
                                                    opacity: 0.9,
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>

                                        <Button
                                            variant="outlined"

                                            sx={{
                                                borderRadius:
                                                    "14px",

                                                textTransform:
                                                    "none",

                                                fontWeight: 700,
                                            }}
                                        >
                                            GitHub
                                        </Button>

                                    </Stack>

                                </CardContent>

                            </Card>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>
    );
}