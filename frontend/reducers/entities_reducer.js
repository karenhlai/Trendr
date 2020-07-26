import { combineReducers } from 'redux';
import users from './users_reducer';
import posts from './posts_reducer';

const entitiesReducer = combineReducers({
    users, 
    posts
});

export default entitiesReducer;