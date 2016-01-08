import expect from 'expect';
import reducer, { defaultState as initialState } from '../../src/reducers';
import { CHANGE_BRUSH_COLOR, CHANGE_BRUSH_SIZE } from '../../src/actions';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      initialState
    );
  });

  it('should handle CHANGE_BRUSH_COLOR', () => {
    expect(reducer(undefined, {
      type: CHANGE_BRUSH_COLOR,
      color: '#ef12ab'
    })).toEqual({
      brushColor: '#ef12ab',
      brushSize: 70
    });
  });

  it('should handle CHANGE_BRUSH_SIZE', () => {
    expect(reducer(undefined, {
      type: CHANGE_BRUSH_SIZE,
      size: 200
    })).toEqual({
      brushColor: '#ea3370',
      brushSize: 200 
    });
  });
});
