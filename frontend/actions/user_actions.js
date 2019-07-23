import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  }
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
};

export const fetchAllUsers = () => dispatch => 
  UserAPIUtil.fetchAllUsers().then((users) => dispatch(receiveAllUsers(users)));

export const fetchUser = (id) => dispatch => 
  UserAPIUtil.fetchUser(id).then((user) => dispatch(receiveUser(user)));
