import axios from 'axios';
import { toast } from "react-toastify";
import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
} from '../constants/userConstant';



// Update userSignInAction
export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post("https://womenhelpline-backend.onrender.com/api/signin", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        });
        toast.success("Login Successfully!");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// Update userSignUpAction
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post("https://womenhelpline-backend.onrender.com/api/signup", user);
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data,
        });
        toast.success('Register Successfully!');
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error,
        });
        toast.error(error.response.data.error);
    }
}

// Update userLogoutAction
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        const { data } = await axios.get("https://womenhelpline-backend.onrender.com/api/logout");
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        });
        toast.success("Log out successfully!");
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// Update userProfileAction
export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
      const token = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).token : null;
  
      if (token) {
        const { data } = await axios.get("https://womenhelpline-backend.onrender.com/api/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
  
        dispatch({
          type: USER_LOAD_SUCCESS,
          payload: data
        });
      } else {
        // Handle the case when the token is not available or expired
        dispatch({
          type: USER_LOAD_FAIL,
          payload: "User not authenticated"
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOAD_FAIL,
        payload: error.response.data.error
      });
    }
  };

// Update allUserAction
export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("https://womenhelpline-backend.onrender.com/api/allusers");
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// Update createUserAction
export const createUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("https://womenhelpline-backend.onrender.com/api/allusers");
        dispatch({
            type: ALL_USER_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ALL_USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}







