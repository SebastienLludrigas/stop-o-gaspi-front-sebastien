// === action types
export const HANDLE_DATAS = 'HANDLE_DATAS';
export const SAVE_DATAS = 'SAVE_DATAS';

// === action creators
export const handleDatas = () => ({
  type: HANDLE_DATAS,
});

export const saveDatas = (datas) => ({
  type: SAVE_DATAS,
  datas,
});
