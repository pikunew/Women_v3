import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes

function Button({ title, link }) {
  return (
    <Link to={link} className="tf-button">
      {title}
      <span className="icon-arrow-right2"></span>
    </Link>
  );
}

// Add prop type validation
Button.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
