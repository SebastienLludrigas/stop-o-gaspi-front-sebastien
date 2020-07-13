// === action types
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const TOGGLE_SCAN_INFO = 'TOGGLE_SCAN_INFO';
export const ON_DETECTED = 'ON_DETECTED';
export const FETCH_API_DATAS = 'FETCH_API_DATAS';
// export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

// === action creators
export const toggleModal = () => ({
  type: TOGGLE_MODAL,
});

export const toggleScanInfo = () => ({
  type: TOGGLE_SCAN_INFO,
});

export const onDetected = (result) => ({
  type: ON_DETECTED,
  result,
});

export const fetchApiDatas = () => ({
  type: FETCH_API_DATAS,
});
