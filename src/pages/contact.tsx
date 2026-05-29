import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import React from "react";
export default function Contact() {

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

                <Grid
                    container
                    spacing={6}

                    sx={{
                        alignItems: "center",
                    }}
                >

                    {/* LEFT CONTENT */}

                    <Grid size={{ xs: 12, md: 5 }} >

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
                                Contact
                            </Box>

                            <br />

                            <Box
                                component="span"

                                sx={{
                                    color: "#0f172a",
                                }}
                            >
                                Me
                            </Box>

                        </Typography>

                        <Typography
                            sx={{
                                color: "#64748b",

                                mt: 3,

                                lineHeight: 1.9,

                                fontSize: {
                                    xs: "16px",
                                    md: "18px",
                                },
                            }}
                        >
                            Have a project idea or looking for
                            a frontend developer?

                            Feel free to contact me for web
                            application development, React JS,
                            TypeScript, .NET MVC or SQL Server
                            based solutions.
                        </Typography>

                        {/* CONTACT CARDS */}

                        <Stack
                            spacing={3}
                            sx={{ mt: 5 }}
                        >

                            <Card
                                sx={{
                                    borderRadius: "24px",

                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.05)",
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "18px",
                                        }}
                                    >
                                        📧 Email
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",

                                            mt: 1,
                                        }}
                                    >
                                        gamitdhruval5@gmail.com
                                    </Typography>

                                </CardContent>

                            </Card>

                            <Card
                                sx={{
                                    borderRadius: "24px",

                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.05)",
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "18px",
                                        }}
                                    >
                                        📞 Phone
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",

                                            mt: 1,
                                        }}
                                    >
                                        +91 9106789002
                                    </Typography>

                                </CardContent>

                            </Card>

                            <Card
                                sx={{
                                    borderRadius: "24px",

                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.05)",
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        sx={{
                                            fontWeight: 800,

                                            color: "#0f172a",

                                            fontSize: "18px",
                                        }}
                                    >
                                        📍 Location
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: "#64748b",

                                            mt: 1,
                                        }}
                                    >
                                        Surat, Gujarat, India
                                    </Typography>

                                </CardContent>

                            </Card>

                        </Stack>

                    </Grid>

                    {/* RIGHT FORM */}

                    <Grid size={{ xs: 12, md: 7 }}>

                        <Card
                            sx={{
                                borderRadius: "35px",

                                p: {
                                    xs: 2,
                                    md: 4,
                                },

                                boxShadow:
                                    "0 25px 70px rgba(0,0,0,0.06)",

                                background:
                                    "rgba(255,255,255,0.8)",

                                backdropFilter:
                                    "blur(10px)",
                            }}
                        >

                            <CardContent>

                                <Typography
                                    sx={{
                                        fontWeight: 900,

                                        color: "#0f172a",

                                        fontSize: {
                                            xs: "30px",
                                            md: "42px",
                                        },

                                        mb: 4,
                                    }}
                                >
                                    Send Message
                                </Typography>

                                <Grid
                                    container
                                    spacing={3}
                                >

                                    <Grid
                                        size={{ xs: 12, md: 6 }}
                                    >

                                        <TextField
                                            fullWidth

                                            label="Your Name"

                                            variant="outlined"

                                            sx={{
                                                "& .MuiOutlinedInput-root":
                                                {
                                                    borderRadius:
                                                        "16px",
                                                },
                                            }}
                                        />

                                    </Grid>

                                    <Grid
                                        size={{ xs: 12, md: 6 }}
                                    >

                                        <TextField
                                            fullWidth

                                            label="Email Address"

                                            variant="outlined"

                                            sx={{
                                                "& .MuiOutlinedInput-root":
                                                {
                                                    borderRadius:
                                                        "16px",
                                                },
                                            }}
                                        />

                                    </Grid>

                                    <Grid
                                        size={{ xs: 12 }}
                                    >

                                        <TextField
                                            fullWidth

                                            label="Subject"

                                            variant="outlined"

                                            sx={{
                                                "& .MuiOutlinedInput-root":
                                                {
                                                    borderRadius:
                                                        "16px",
                                                },
                                            }}
                                        />

                                    </Grid>

                                    <Grid
                                        size={{ xs: 12 }}
                                    >

                                        <TextField
                                            fullWidth

                                            multiline

                                            rows={6}

                                            label="Write Message"

                                            variant="outlined"

                                            sx={{
                                                "& .MuiOutlinedInput-root":
                                                {
                                                    borderRadius:
                                                        "20px",
                                                },
                                            }}
                                        />

                                    </Grid>

                                </Grid>

                                {/* BUTTON */}

                                <Button
                                    variant="contained"

                                    size="large"

                                    sx={{
                                        mt: 4,

                                        background:
                                            "linear-gradient(to right,#0ea5e9,#6366f1)",

                                        px: 5,
                                        py: 1.7,

                                        borderRadius: "16px",

                                        textTransform: "none",

                                        fontWeight: 700,

                                        fontSize: "16px",

                                        boxShadow:
                                            "0 15px 35px rgba(14,165,233,0.25)",

                                        "&:hover": {
                                            opacity: 0.9,
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    );
}