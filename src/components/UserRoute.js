import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo ? children : <Navigate to="/" />;
}

// Add prop types validation
UserRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserRoute;
