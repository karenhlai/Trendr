import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_POSTS } from '../actions/post_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USER_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    let followerId;
    let followings;
    
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // nextState = merge({}, state, {[action.currentUser.user.id]: action.currentUser.user } );
            nextState = merge({}, state, {[action.currentUser.id]: action.currentUser } );
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
        case RECEIVE_FOLLOW:
            nextState = merge({}, state);
            followerId = action.follow.follower_id;
            nextState[followerId].followings.push(action.follow.following_id);
            return nextState;
        case REMOVE_FOLLOW:
            nextState = merge({}, state);
            followerId = action.follow.follower_id;
            const followIdx = nextState[followerId].followings.indexOf(action.follow.following_id);
            nextState[followerId].followings.splice(followIdx, 1);
            return nextState;
        // case RECEIVE_USER_FOLLOWS:
        //     nextState = merge({}, state, action.followings);
        //     return nextState;
        default:
            return state;
    }
};

export default usersReducer;