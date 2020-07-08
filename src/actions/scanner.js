// === action types
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const ON_DETECTED = 'ON_DETECTED';
export const HANDLE_INPUT = 'HANDLE_INPUT';
// export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

// === action creators
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const onDetected = (result) => ({
  type: ON_DETECTED,
  result,
});

export const handleInput = (value) => ({
  type: HANDLE_INPUT,
  value,
});
