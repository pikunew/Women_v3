import axios from 'axios';
import { ISSUE_TYPE_LOAD_FAIL, ISSUE_TYPE_LOAD_REQUEST, ISSUE_TYPE_LOAD_SUCCESS} from '../constants/issueTypeConstant';



export const issueTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: ISSUE_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/api/type/issues');
        dispatch({
            type: ISSUE_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: ISSUE_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}