# Simple Redux Example

Perhaps this could even be called _Simplest_ Redux Example :) 

After I wrapped my brain around Redux, I wanted to make the most minimal working example for both my own learning and hopefully to benefit others. 

## build && test || start 

* `npm run build` -- Webpack build
* `npm start` -- Do the thing
* `npm test:tape` or `npm test:mocha` depending on your favorite flavor (though they don't yet quite test in the exact same way.. coming soon).

After `git clone`ing the project and `npm install`ing, you can run `npm run build` to have webpack glue the ESNext into a single bundle that Node can natively run. Then you can either run `npm test{mocha:tape}` or `npm start`. 

### How it works

As described above, this was the most minimal example of a working Redux app that I could dream up while still maintaining the general structure of what you would use for a 'real'/larger app. 

For an even simpler version you could do it all in one file, but I wanted to preserve the separation of concepts that I've seen in other Redux apps so as to best understand the 'moving peices'. 

#### `src/`

##### `actions.js`

Defines the `actionTypes` and the `actionCreators` -- http://rackt.org/redux/docs/basics/Actions.html

```
// actionTypes
export const CHANGE_BRUSH_COLOR = 'CHANGE_BRUSH_COLOR';
export const CHANGE_BRUSH_SIZE = 'CHANGE_BRUSH_SIZE';

// actionCreators
export function changeBrushColor(color) {
  return { type: CHANGE_BRUSH_COLOR, color };
}

export function changeBrushSize(size) {
  return { type: CHANGE_BRUSH_SIZE, size };
}
```

##### `reducers.js`

Reducers (or just one reducer) specifies how the the application's state changes in response to an action. -- http://rackt.org/redux/docs/basics/Reducers.html

```
// import the actionTypes
import { CHANGE_BRUSH_COLOR, CHANGE_BRUSH_SIZE } from './actions';

// define the default state
export const defaultState = {
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
```

##### `store.js`

The so called Single Source of Truth, the store holds the application state. -- http://rackt.org/redux/docs/basics/Store.html 

```
import { createStore } from 'redux';
import reducer from './reducers';

let store = createStore(reducer);

export default store;
```

##### `index.js`

Bring it all together.

```
import store from './store';
import { changeBrushColor, changeBrushSize } from './actions';

// Show the default/initial state
console.log('default state => ', store.getState());

// Dispatch some actions and see how the state has changed
store.dispatch(changeBrushColor('#efe742'));
console.log('change brush color => ', store.getState());
store.dispatch(changeBrushSize(200));
console.log('change brush size => ', store.getState());
```
