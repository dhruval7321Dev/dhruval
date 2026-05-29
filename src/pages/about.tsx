import {
    Avatar,
    Box,
    Card,
    CardContent,
    Container,
    Stack,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function About() {

    const skills = [
        "React JS",
        "TypeScript",
        "Redux",
        ".NET MVC",
        "SQL Server",
        "Material UI",
        "Bootstrap",
        "Ionic",
        "React Native Expo",
        "Sqlite Database",
        "HTML",
        "CSS",
        "JavaScript",
        "Ajax",
        "Angular js",
        "API Integration",
        "Git & GitHub",
        "IIS Deployment",
    ];

    return (

        <Box
            sx={{
                minHeight: "100vh",

                background:
                    "linear-gradient(to bottom right,#f8fafc,#ffffff,#eef2ff)",

                py: {
                    xs: 5,
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

                    width: 300,
                    height: 300,

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

                    width: 300,
                    height: 300,

                    borderRadius: "50%",

                    background:
                        "linear-gradient(to right,#ec4899,#8b5cf6)",

                    filter: "blur(120px)",

                    opacity: 0.2,
                }}
            />

            <Container maxWidth="xl">

                {/* TITLE */}

                <Box
                    sx={{
                        textAlign: "center",

                        mb: 8,
                    }}
                >

                    <Typography
                        sx={{
                            fontWeight: 900,

                            color: "#0f172a",

                            fontSize: {
                                xs: "42px",
                                md: "72px",
                            },
                        }}
                    >
                        About Me
                    </Typography>

                    <Typography
                        sx={{
                            color: "#64748b",

                            mt: 2,

                            maxWidth: 750,

                            mx: "auto",

                            lineHeight: 1.9,

                            fontSize: {
                                xs: "15px",
                                md: "18px",
                            },
                        }}
                    >
                        Full Stack Developer with experience
                        in frontend development, backend
                        integration and enterprise web
                        applications using React JS,
                        TypeScript, .NET MVC and SQL Server.
                    </Typography>

                </Box>

                <Grid
                    container
                    spacing={5}
                >

                    {/* LEFT PROFILE CARD */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Card
                            sx={{
                                borderRadius: "35px",

                                p: 2,

                                height: "100%",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",

                                background:
                                    "rgba(255,255,255,0.9)",

                                backdropFilter:
                                    "blur(10px)",
                            }}
                        >

                            <CardContent>

                                <Stack style={{ alignItems: 'center' }}
                                >

                                    <Avatar
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"

                                        sx={{
                                            width: 170,
                                            height: 170,

                                            mb: 3,

                                            border:
                                                "6px solid #fff",

                                            boxShadow:
                                                "0 15px 40px rgba(0,0,0,0.1)",
                                        }}
                                    />

                                    <Typography
                                        sx={{
                                            fontWeight: 900,

                                            color: "#0f172a",

                                            fontSize: "32px",

                                            textAlign: "center",
                                        }}
                                    >
                                        DhruvalKumar Gamit
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,

                                            fontWeight: 700,

                                            color: "#6366f1",

                                            letterSpacing: 1,
                                        }}
                                    >
                                        FULL STACK DEVELOPER
                                    </Typography>

                                </Stack>

                                {/* CONTACT */}

                                <Box sx={{ mt: 5 }}>

                                    {[
                                        "📞 9106789002 | 8980818059",
                                        "📧 gamitdhruval5@gmail.com",
                                        "📍 L.H Road, Surat",
                                        "💼 5+ Years Experience",
                                    ].map((item) => (

                                        <Typography
                                            key={item}

                                            sx={{
                                                color: "#475569",

                                                mb: 2,

                                                lineHeight: 1.8,
                                            }}
                                        >
                                            {item}
                                        </Typography>

                                    ))}

                                </Box>

                            </CardContent>

                        </Card>

                    </Grid>

                    {/* RIGHT CONTENT */}

                    <Grid size={{ xs: 12, md: 8 }}>

                        {/* OBJECTIVE */}

                        <Card
                            sx={{
                                borderRadius: "35px",

                                mb: 4,

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >

                            <CardContent sx={{ p: 4 }}>

                                <Typography
                                    sx={{
                                        fontWeight: 900,

                                        color: "#0f172a",

                                        fontSize: {
                                            xs: "28px",
                                            md: "38px",
                                        },

                                        mb: 3,
                                    }}
                                >
                                    Objective
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#475569",

                                        lineHeight: 2,

                                        fontSize: {
                                            xs: "15px",
                                            md: "17px",
                                        },
                                    }}
                                >
                                    Passionate Full Stack
                                    Developer with hands-on
                                    experience in frontend
                                    development, testing,
                                    deployment and client
                                    support.

                                    Focused on building scalable,
                                    user-friendly and responsive
                                    digital solutions using
                                    modern technologies and clean
                                    architecture.
                                </Typography>

                            </CardContent>

                        </Card>

                        {/* EXPERIENCE */}

                        <Card
                            sx={{
                                borderRadius: "35px",

                                mb: 4,

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >

                            <CardContent sx={{ p: 4 }}>

                                <Typography
                                    sx={{
                                        fontWeight: 900,

                                        color: "#0f172a",

                                        fontSize: {
                                            xs: "28px",
                                            md: "38px",
                                        },

                                        mb: 4,
                                    }}
                                >
                                    Professional Experience
                                </Typography>

                                <Box
                                    sx={{
                                        borderLeft:
                                            "5px solid #6366f1",

                                        pl: 3,
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "24px",
                                        }}
                                    >
                                        Vitra Technologies LLP
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,

                                            color: "#6366f1",

                                            fontWeight: 700,
                                        }}
                                    >
                                        2021 – Present
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 3,

                                            color: "#475569",

                                            lineHeight: 2,
                                        }}
                                    >
                                        • React JS & Ionic
                                        development
                                        <br />
                                        • UI Design using
                                        Material UI & Bootstrap
                                        <br />
                                        • .NET MVC integration
                                        <br />
                                        • SQL Server database
                                        handling
                                        <br />
                                        • API Integration &
                                        Testing
                                        <br />
                                        • IIS Deployment
                                        <br />
                                        • Client support &
                                        training
                                    </Typography>

                                </Box>

                            </CardContent>

                        </Card>

                        {/* SKILLS */}

                        <Card
                            sx={{
                                borderRadius: "35px",

                                mb: 4,

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >

                            <CardContent sx={{ p: { xs: 3, md: 5 } }}>

                                {/* TITLE */}

                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        color: "#0f172a",

                                        fontSize: {
                                            xs: "28px",
                                            md: "42px",
                                        },

                                        mb: 1,
                                    }}
                                >
                                    Technical Skills
                                </Typography>

                                <Typography
                                    sx={{
                                        color: "#64748b",
                                        mb: 5,
                                        lineHeight: 1.8,
                                        maxWidth: 700,
                                    }}
                                >
                                    Experienced in modern frontend and full stack
                                    development technologies with focus on scalable,
                                    responsive and enterprise-level applications.
                                </Typography>

                                {/* SKILLS GRID */}

                                <Grid
                                    container
                                    spacing={2}
                                >

                                    {skills.map((skill) => (

                                        <Grid
                                            key={skill}
                                            size={{
                                                xs: 6,
                                                sm: 4,
                                                md: 3,
                                            }}
                                        >

                                            <Box
                                                sx={{
                                                    background:
                                                        "linear-gradient(135deg,#ffffff,#f8fafc)",

                                                    border:
                                                        "1px solid #e2e8f0",

                                                    borderRadius: "20px",

                                                    p: 2.5,

                                                    height: "100%",

                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",

                                                    transition: "0.3s ease",

                                                    boxShadow:
                                                        "0 10px 30px rgba(0,0,0,0.03)",

                                                    cursor: "pointer",

                                                    position: "relative",

                                                    overflow: "hidden",

                                                    "&:hover": {
                                                        transform:
                                                            "translateY(-6px)",

                                                        boxShadow:
                                                            "0 20px 40px rgba(99,102,241,0.12)",

                                                        border:
                                                            "1px solid #c7d2fe",
                                                    },

                                                    "&::before": {
                                                        content: '""',

                                                        position: "absolute",

                                                        top: 0,
                                                        left: 0,

                                                        width: "100%",
                                                        height: "4px",

                                                        background:
                                                            "linear-gradient(to right,#0ea5e9,#8b5cf6)",
                                                    },
                                                }}
                                            >

                                                <Stack
                                                >

                                                    <Box
                                                        sx={{
                                                            width: 50,
                                                            height: 50,

                                                            borderRadius: "14px",

                                                            background:
                                                                "linear-gradient(to right,#dbeafe,#ede9fe)",

                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",

                                                            fontSize: "22px",
                                                        }}
                                                    >
                                                        ⚡
                                                    </Box>

                                                    <Typography
                                                        sx={{
                                                            fontWeight: 700,

                                                            color: "#0f172a",

                                                            textAlign: "center",

                                                            fontSize: {
                                                                xs: "14px",
                                                                md: "15px",
                                                            },
                                                        }}
                                                    >
                                                        {skill}
                                                    </Typography>

                                                </Stack>

                                            </Box>

                                        </Grid>

                                    ))}

                                </Grid>

                            </CardContent>

                        </Card>

                        {/* EDUCATION 

                        <Card
                            sx={{
                                borderRadius: "35px",

                                boxShadow:
                                    "0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >

                            <CardContent sx={{ p: 4 }}>

                                <Typography
                                    sx={{
                                        fontWeight: 900,

                                        color: "#0f172a",

                                        fontSize: {
                                            xs: "28px",
                                            md: "38px",
                                        },

                                        mb: 4,
                                    }}
                                >
                                    Education
                                </Typography>

                                <Box sx={{ mb: 4 }}>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "22px",
                                        }}
                                    >
                                        VNSGU – BCA
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,

                                            color: "#6366f1",

                                            fontWeight: 700,
                                        }}
                                    >
                                        2018
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 2,

                                            color: "#475569",
                                        }}
                                    >
                                        Bachelor of Computer
                                        Applications
                                    </Typography>

                                </Box>

                                <Box>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "22px",
                                        }}
                                    >
                                        SHRI S.G. HIGH SCHOOL
                                    </Typography>

                                    <Typography
                                        sx={{
                                            mt: 1,

                                            color: "#6366f1",

                                            fontWeight: 700,
                                        }}
                                    >
                                        Commerce – 2015
                                    </Typography>

                                </Box>

                            </CardContent>

                        </Card>
*/}
                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}