import store from './store';
import { changeBrushColor, changeBrushSize } from './actions';

console.log('dispatch an unknown action, which should return the default state');

store.dispatch({ type: 'UNKNOWN_ACTION' });
console.log('default state => ', store.getState());

store.dispatch(changeBrushColor('#efe742'));
console.log('change brush color => ', store.getState());
store.dispatch(changeBrushSize(200));
console.log('change brush size => ', store.getState());
