// http://rackt.org/redux/docs/api/combineReducers.html
//
// The combineReducers helper function turns an object whose values are 
// different reducing functions into a single reducing function you can 
// pass to createStore.
//
// The resulting reducer calls every child reducer, and gather their 
// results into a single state object.
// 
// In this example, we just have one reducer, but it we split our app 
// into using multiple reducers, we would import the below:
//
// import { combineReducers } from 'redux';

// import the actionTypes
import { CHANGE_BRUSH_COLOR, CHANGE_BRUSH_SIZE } from './actions';

// define the default state
const defaultState = {
  brushColor: '#ea3370',
  brushSize: 70
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BRUSH_COLOR:
      return Object.assign({}, state, { brushColor: action.color });
    case CHANGE_BRUSH_SIZE:
      return Object.assign({}, state, { brushSize: action.size });
    default:
      return state;
  }
}

// And if there were more than one reducer, export them all as 
// a unified reducer.
//
// const reducers = combineReducers({
//   reducerOne,
//   reducerTwo
// });
//
// export default reducers;
