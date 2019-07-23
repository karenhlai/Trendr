import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = merge({}, state, {[action.currentUser.id]: action.currentUser} );
            return nextState;
        case RECEIVE_ALL_USERS:
            nextState = merge({}, state, action.users);
            return nextState;
        // case RECEIVE_USER:
        //     nextState = merge({}, state, { [action.user.id]: action.user } );
        //     return nextState;
        case RECEIVE_POSTS:
            //receive each user's info for each post (avatar)
            //remove when RECEIVE_ALL_USERS can be used in place
            nextState = merge({}, state, action.users); 
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;