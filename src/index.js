import store from './store';
import { changeBrushColor, changeBrushSize } from './actions';

// Show the default/initial state
console.log('default state => ', store.getState());

// Dispatch some actions and see how the state has changed
store.dispatch(changeBrushColor('#efe742'));
console.log('change brush color => ', store.getState());
store.dispatch(changeBrushSize(200));
console.log('change brush size => ', store.getState());
