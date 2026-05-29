import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Button,
    Container,
    IconButton,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export default function Menubar() {

    return (

        <AppBar
            position="sticky"
            elevation={0}

            sx={{
                background: "white",
                color: "#0f172a",
                borderBottom:
                    "1px solid #e2e8f0",
            }}
        >

            <Container maxWidth={false}>

                <Toolbar
                    disableGutters

                    sx={{
                        minHeight: "80px",
                        justifyContent: "space-between",
                    }}
                >

                    {/* LOGO */}

                    <Typography
                        sx={{
                            fontWeight: 800,

                            fontSize: {
                                xs: "24px",
                                md: "30px",
                            },

                            background:
                                "linear-gradient(to right,#0ea5e9,#6366f1)",

                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Dhruval.dev
                    </Typography>

                    {/* MENU */}

                    <Stack
                        direction="row"
                        spacing={4}

                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                    >

                        {[
                            {
                                name: "Home",
                                path: "/dhruval",
                            },
                            {
                                name: "About Me",
                                path: "/about",
                            },
                            {
                                name: "Portfolio",
                                path: "/portfolio",
                            },
                            {
                                name: "Contact",
                                path: "/contact",
                            },
                        ].map((item) => (

                            <Typography
                                key={item.name}

                                component={Link}

                                to={item.path}

                                sx={{
                                    fontWeight: 600,

                                    cursor: "pointer",

                                    transition: "0.3s",

                                    textDecoration: "none",

                                    color: "#0f172a",

                                    position: "relative",

                                    "&:hover": {
                                        color: "#0ea5e9",
                                    },

                                    "&::after": {
                                        content: '""',

                                        position: "absolute",

                                        width: 0,

                                        height: "2px",

                                        left: 0,

                                        bottom: -5,

                                        background: "#0ea5e9",

                                        transition: "0.3s",
                                    },

                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                            >
                                {item.name}
                            </Typography>

                        ))}

                    </Stack>

                    {/* RIGHT BUTTONS */}

                    <Stack
                        direction="row"
                    >

                        {/* RESUME BUTTON */}

                        <Button
                            variant="contained"

                            sx={{
                                display: {
                                    xs: "none",
                                    sm: "flex",
                                },

                                background:
                                    "linear-gradient(to right,#0ea5e9,#6366f1)",

                                color: "white",

                                px: 3,
                                py: 1.2,

                                borderRadius: "12px",

                                textTransform: "none",

                                fontWeight: 700,

                                boxShadow:
                                    "0 10px 25px rgba(14,165,233,0.3)",

                                "&:hover": {
                                    opacity: 0.9,
                                },
                            }}
                        >
                            Download CV
                        </Button>

                        {/* MOBILE MENU */}

                        <IconButton
                            sx={{
                                display: {
                                    xs: "flex",
                                    md: "none",
                                },

                                color: "#0f172a",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Stack>

                </Toolbar>

            </Container>

        </AppBar>
    );
}