
import React from "react";
import PropTypes from "prop-types";  // Import PropTypes correctly
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../Theme.js";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,    // Define propTypes for your component
  subtitle: PropTypes.string.isRequired, // Add isRequired if these props are required
};

export default Header;
