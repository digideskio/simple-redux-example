import test from 'tape';
import store from '../../src/store';
import { changeBrushColor, changeBrushSize } from '../../src/actions';
import { defaultState } from '../../src/reducers';

test('Store returns default state when an unknown action is dispatched', t => {
  t.plan(1);
  store.dispatch({ type: 'UNKNOWN_ACTION' });
  t.deepEqual(defaultState, store.getState());
});

test('Change the brush color to #efe742', t => {
  t.plan(1);
  store.dispatch(changeBrushColor('#efe742'));
  t.deepEqual(store.getState(),
    { brushColor: '#efe742', brushSize: 70 }
  );
});

test('Change the brush size to 200', t => {
  t.plan(1);
  store.dispatch(changeBrushSize(200));
  t.deepEqual(store.getState(),
    { brushColor: '#efe742', brushSize: 200 }
  );
});
