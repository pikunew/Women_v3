import {
    HELPLINE_LOAD_FAIL,
    HELPLINE_LOAD_REQUEST,
    HELPLINE_LOAD_RESET,
    HELPLINE_LOAD_SINGLE_FAIL,
    HELPLINE_LOAD_SINGLE_REQUEST,
    HELPLINE_LOAD_SINGLE_RESET,
    HELPLINE_LOAD_SINGLE_SUCCESS,
    HELPLINE_LOAD_SUCCESS,
    HELPLINE_CREATE_REQUEST,
    HELPLINE_CREATE_SUCCESS,
    HELPLINE_CREATE_FAIL,
    HELPLINE_CREATE_RESET,

} from "../constants/helplineconstant.js"


// const initialState = {
//     loading: false,
//     helplineInfo: null,
//     error: null,
//   };
//Create Helpline
export const helplineCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case HELPLINE_CREATE_REQUEST:
        return { loading: true,
             helplineInfo: null, 
             isAuthenticated: false };
  
      case HELPLINE_CREATE_SUCCESS:
        return { loading: false,
             helplineInfo: action.payload, 
             isAuthenticated: true, };
  
      case HELPLINE_CREATE_FAIL:
        return {loading: false, 
            helplineInfo: null, 
            isAuthenticated: false,
            error: action.payload };
  
      case HELPLINE_CREATE_RESET:
        return {};
  
      default:
        return state;
    }
  };

// Search
export const loadHelplineReducer = (state = { helplines: [] }, action) => {
    switch (action.type) {
        case HELPLINE_LOAD_REQUEST:
            return { loading: true }
        case HELPLINE_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                helplines: action.payload.helplines
            }
        case HELPLINE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case HELPLINE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// single helpline reducer
export const loadHelplineSingleReducer = (state = { helpline: {} }, action) => {
    switch (action.type) {
        case HELPLINE_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case HELPLINE_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                singleJob: action.payload.helpline,

            }
        case HELPLINE_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case HELPLINE_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }

}