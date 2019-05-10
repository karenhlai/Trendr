import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
// import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = merge({}, state, {[action.currentUser.id]: action.currentUser} );
            return nextState;
        case RECEIVE_POSTS:
            nextState = merge({}, state, action.users);
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;