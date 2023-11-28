import { ISSUE_TYPE_LOAD_FAIL, ISSUE_TYPE_LOAD_REQUEST, ISSUE_TYPE_LOAD_RESET, ISSUE_TYPE_LOAD_SUCCESS} from "../constants/issueTypeConstant"


export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
    switch (action.type) {
        case ISSUE_TYPE_LOAD_REQUEST:
            return { loading: true }
        case ISSUE_TYPE_LOAD_SUCCESS:
            return {
                loading: false,
                jobType: action.payload.jobT
            }
        case ISSUE_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ISSUE_TYPE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}