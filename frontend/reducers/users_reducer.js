import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// import { RECEIVE_REVIEW, RECEIVE_BENCH } from '../actions/bench_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = merge({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        // case RECEIVE_REVIEW:
        //     return merge({}, state, { [action.author.id]: action.author });
        // case RECEIVE_BENCH:
        //     return merge({}, state, action.authors);
        default:
            return state;
    }
};

export default usersReducer;
