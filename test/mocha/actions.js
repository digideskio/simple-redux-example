import expect from 'expect';
import { CHANGE_BRUSH_COLOR, CHANGE_BRUSH_SIZE } from '../../src/actions';
import { changeBrushColor, changeBrushSize } from '../../src/actions';

describe('actions', () => {
  it('should create an action to change the brush color', () => {
    const color = '#ea24fg';
    const expectedAction = {
      type: CHANGE_BRUSH_COLOR, 
      color
    };
    expect(changeBrushColor(color)).toEqual(expectedAction);
  });

  it('should create an action to change the brush size', () => {
    const size = 500;
    const expectedAction = {
      type: CHANGE_BRUSH_SIZE,
      size
    };
    expect(changeBrushSize(size)).toEqual(expectedAction);
  });
});
