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
