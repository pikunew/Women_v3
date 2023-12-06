import axios from 'axios';
import { toast } from "react-toastify";
import {
    HELPLINE_LOAD_FAIL,
    HELPLINE_LOAD_REQUEST,
    HELPLINE_LOAD_SINGLE_FAIL,
    HELPLINE_LOAD_SINGLE_REQUEST,
    HELPLINE_LOAD_SINGLE_SUCCESS,
    HELPLINE_LOAD_SUCCESS,
    HELPLINE_CREATE_REQUEST,
    HELPLINE_CREATE_SUCCESS,
    HELPLINE_CREATE_FAIL,
} from "../constants/helplineconstant"



// create helpline
export const createHelplineAction = (user) => async (dispatch) => {
    dispatch({ type: HELPLINE_CREATE_REQUEST });
  
    try {
      const { data } = await axios.post('/api/helpline/create', user);
  
      dispatch({
        type: HELPLINE_CREATE_SUCCESS,
        payload: data,
      });
  
      toast.success('Helpline Created Successfully!');
    } catch (error) {
      dispatch({
        type: HELPLINE_CREATE_FAIL,
        payload: error.response ? error.response.data.error : 'An error occurred',
      });
  
      toast.error(error.response ? error.response.data.error : 'An error occurred');
    }
  };


// search 
export const helplineLoadAction = () => async (dispatch) => {
    dispatch({ type: HELPLINE_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`https://womenhelpline-backend.onrender.com/api/helplines/show/?`)
        dispatch({
            type: HELPLINE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: HELPLINE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}



// single helpline action
export const helplineLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: HELPLINE_LOAD_SINGLE_REQUEST });
    try {
        const { data } = await axios.get(`https://womenhelpline-backend.onrender.com/api/helpline/${id}`);
        dispatch({
            type: HELPLINE_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: HELPLINE_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}