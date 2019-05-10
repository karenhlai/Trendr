import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import modal from './modal_reducer';

const uiReducer = combineReducers({
  // filters,
  modal
});

export default uiReducer;