import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadHelplineReducer, loadHelplineSingleReducer, helplineCreateReducer, } from './reducers/helplineReducer';
import { loadJobTypeReducer } from './reducers/issueTypeReducer';
import { allUserReducer, userApplyJobReducer, userReducerLogout, userReducerProfile, userReducerSignIn } from './reducers/userReducer';

//combine reducers
const reducer = combineReducers({
    loadHelplines: loadHelplineReducer,
    jobTypeAll: loadJobTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleHelpline: loadHelplineSingleReducer,
    userJobApplication: userApplyJobReducer,
    allUsers: allUserReducer,
    helplineCreate: helplineCreateReducer, 
});


//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;