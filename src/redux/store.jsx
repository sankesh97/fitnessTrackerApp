import { applyMiddleware, createStore } from 'redux';
import fitnessTrackerReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(fitnessTrackerReducer, applyMiddleware(thunk));

export default store;
