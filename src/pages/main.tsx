import {
    Box,
    Button,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();
    return (

        <Box
            sx={{
                minHeight: "100vh",

                background:
                    "linear-gradient(to bottom right,#ffffff,#f8fafc,#eef2ff)",

                position: "relative",

                overflow: "hidden",

                display: "flex",

                alignItems: "center",

                py: {
                    xs: 5,
                    md: 8,
                },
            }}
        >

            {/* TOP BLUR */}

            <Box
                sx={{
                    position: "absolute",

                    top: -120,
                    left: -120,

                    width: 320,
                    height: 320,

                    borderRadius: "50%",

                    background:
                        "linear-gradient(to right,#38bdf8,#6366f1)",

                    filter: "blur(120px)",

                    opacity: 0.25,
                }}
            />

            {/* BOTTOM BLUR */}

            <Box
                sx={{
                    position: "absolute",

                    bottom: -120,
                    right: -120,

                    width: 320,
                    height: 320,

                    borderRadius: "50%",

                    background:
                        "linear-gradient(to right,#ec4899,#8b5cf6)",

                    filter: "blur(120px)",

                    opacity: 0.25,
                }}
            />

            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={8}

                    sx={{
                        alignItems: "center",
                    }}
                >

                    {/* LEFT CONTENT */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        {/* EXPERIENCE */}

                        <Chip
                            label="🔥 5+ Years Experience"

                            sx={{
                                background:
                                    "linear-gradient(to right,#dbeafe,#ede9fe)",

                                color: "#2563eb",

                                fontWeight: 700,

                                px: 1,

                                mb: 3,

                                borderRadius: "12px",
                            }}
                        />

                        {/* NAME */}

                        <Typography
                            sx={{
                                fontWeight: 900,

                                lineHeight: 1,

                                letterSpacing: "-3px",

                                color: "#0f172a",

                                fontSize: {
                                    xs: "22px",
                                    sm: "38px",
                                    md: "42px",
                                },
                            }}
                        >
                            Mr. DhruvalKumar Gamit
                            <br />

                            <Box
                                component="span"

                                sx={{
                                    background:
                                        "linear-gradient(to right,#0ea5e9,#8b5cf6)",

                                    WebkitBackgroundClip:
                                        "text",

                                    WebkitTextFillColor:
                                        "transparent",
                                }}
                            >
                                WEB DEVELOPER
                            </Box>

                        </Typography>

                        {/* DESIGNATION */}

                        <Typography
                            sx={{
                                mt: 2,

                                fontWeight: 700,

                                color: "#475569",

                                letterSpacing: "3px",

                                fontSize: {
                                    xs: "16px",
                                    md: "20px",
                                },
                            }}
                        >

                        </Typography>

                        {/* SLOGAN */}

                        <Typography
                            sx={{
                                mt: 4,

                                color: "#475569",

                                lineHeight: 1.9,

                                maxWidth: 620,

                                fontSize: {
                                    xs: "16px",
                                    md: "20px",
                                },
                            }}
                        >
                        </Typography>

                        {/* BUTTONS */}

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row",
                            }}

                            spacing={2}

                            sx={{ mt: 5 }}
                        >

                            <Button
                                variant="contained"
                                size="large"

                                sx={{
                                    background:
                                        "linear-gradient(to right,#0ea5e9,#6366f1)",

                                    color: "#fff",

                                    px: 4,
                                    py: 1.7,

                                    borderRadius: "16px",

                                    textTransform: "none",

                                    fontWeight: 700,

                                    fontSize: "16px",

                                    boxShadow:
                                        "0 15px 35px rgba(14,165,233,0.25)",

                                    transition: "0.3s",

                                    "&:hover": {
                                        transform:
                                            "translateY(-3px)",
                                    },
                                }}
                                onClick={() => {
                                    navigate("/portfolio");
                                }}
                            >
                                View Portfolio
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"

                                sx={{
                                    border:
                                        "2px solid #cbd5e1",

                                    color: "#0f172a",

                                    px: 4,
                                    py: 1.7,

                                    borderRadius: "16px",

                                    textTransform: "none",

                                    fontWeight: 700,

                                    fontSize: "16px",

                                    background: "#fff",

                                    "&:hover": {
                                        borderColor: "#6366f1",

                                        background:
                                            "#f8fafc",
                                    },
                                }}
                                onClick={() => {
                                    navigate("/about");
                                }}
                            >
                                About Me
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"

                                sx={{
                                    border:
                                        "2px solid #cbd5e1",

                                    color: "#0f172a",

                                    px: 4,
                                    py: 1.7,

                                    borderRadius: "16px",

                                    textTransform: "none",

                                    fontWeight: 700,

                                    fontSize: "16px",

                                    background: "#fff",

                                    "&:hover": {
                                        borderColor: "#6366f1",

                                        background:
                                            "#f8fafc",
                                    },
                                }}
                                onClick={() => {
                                    navigate("/contact");
                                }}
                            >
                                Contact Me
                            </Button>
                        </Stack>

                        {/* STATS */}

                        <Stack
                            direction="row"

                            spacing={{
                                xs: 3,
                                md: 6,
                            }}

                            sx={{
                                mt: 6,

                                flexWrap: "wrap",
                            }}
                        >

                            {[
                                {
                                    value: "20+",
                                    label: "Projects",
                                },
                                {
                                    value: "5+",
                                    label: "Years Exp",
                                },
                                {
                                    value: "15+",
                                    label: "Clients",
                                },
                            ].map((item) => (

                                <Box key={item.label}>

                                    <Typography
                                        sx={{
                                            fontWeight: 900,

                                            background:
                                                "linear-gradient(to right,#0ea5e9,#8b5cf6)",

                                            WebkitBackgroundClip:
                                                "text",

                                            WebkitTextFillColor:
                                                "transparent",

                                            fontSize: {
                                                xs: "32px",
                                                md: "42px",
                                            },
                                        }}
                                    >
                                        {item.value}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",
                                        }}
                                    >
                                        {item.label}
                                    </Typography>

                                </Box>

                            ))}

                        </Stack>

                    </Grid>

                    {/* RIGHT IMAGE */}

                    <Grid size={{ xs: 12, md: 6 }} >

                        <Box
                            sx={{
                                position: "relative",

                                display: "flex",

                                justifyContent: "center",
                            }}
                        >

                            {/* GLOW */}

                            <Box
                                sx={{
                                    position: "absolute",

                                    width: 500,
                                    height: 500,

                                    borderRadius: "50%",

                                    background:
                                        "linear-gradient(to right,#38bdf8,#8b5cf6)",

                                    filter: "blur(120px)",

                                    opacity: 0.25,

                                    top: 50,
                                }}
                            />

                            {/* IMAGE */}

                            <Box
                                component="img"

                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"

                                alt="developer"

                                sx={{
                                    width: {
                                        xs: "100%",
                                        sm: "80%",
                                        md: "100%",
                                    },

                                    maxWidth: 500,

                                    height: {
                                        xs: 450,
                                        md: 650,
                                    },

                                    objectFit: "cover",

                                    borderRadius: "40px",

                                    position: "relative",

                                    zIndex: 2,

                                    border:
                                        "8px solid rgba(255,255,255,0.7)",

                                    boxShadow:
                                        "0 30px 80px rgba(15,23,42,0.15)",

                                    transition: "0.5s",

                                    "&:hover": {
                                        transform:
                                            "scale(1.03)",
                                    },
                                }}
                            />

                            {/* FLOAT CARD */}

                            <Box
                                sx={{
                                    position: "absolute",

                                    bottom: 30,
                                    left: {
                                        xs: 10,
                                        md: -20,
                                    },

                                    zIndex: 5,

                                    background:
                                        "rgba(255,255,255,0.85)",

                                    backdropFilter:
                                        "blur(10px)",

                                    border:
                                        "1px solid rgba(255,255,255,0.5)",

                                    p: 3,

                                    borderRadius: "24px",

                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.08)",
                                }}
                            >

                                <Typography
                                    sx={{
                                        fontWeight: 900,

                                        color: "#0f172a",

                                        fontSize: "22px",
                                    }}
                                >
                                    React Expert
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#64748b",

                                        mt: 1,
                                    }}
                                >
                                    React JS • TypeScript
                                    <br />
                                    .NET MVC • SQL Server
                                </Typography>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box >
    );
}