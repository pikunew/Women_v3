import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.signIn);
    return userInfo && userInfo.role === 1 ? children : <Navigate to="/" />;
}

// Add prop types validation
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminRoute;
