import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import Footer from "../components/footer/index.jsx";
import Navbar from "../components/header/Header4.jsx";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#fff",
              padding: "40px 0",
              fontFamily: "'Arvo', serif",
            }}
          >
            <Box
              sx={{
                backgroundImage: "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
                height: "400px",
                backgroundPosition: "center",
              }}
            >
              <Typography variant="h1" sx={{ fontSize: 80, fontWeight:500, color: "#DF036A" }}>
                404
              </Typography>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h3" sx={{ fontSize: 80,fontWeight:400, color: "#DF036A" }}>
                Look like you're lost
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                The page you are looking for is not available!
              </Typography>

              <Link
                href="/"
                color="primary"
                variant="body1"
                sx={{
                  mt: 2,
                  display: "block",
                  color: "#fff",
                  padding: "10px 20px",
                  background: "#DF036A",
                  margin: "20px 0",
                  display: "inline-block",
                  textDecoration: "none",
                  borderRadius: "25px",
                }}
              >
                Go to Home
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default NotFound;
