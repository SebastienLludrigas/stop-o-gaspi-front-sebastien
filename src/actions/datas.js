// === action types
export const HANDLE_DATAS = 'HANDLE_DATAS';
export const SEND_DATAS = 'SEND_DATAS';
export const PRODUCT_RECOVERY = 'PRODUCT_RECOVERY';

// === action creators
export const handleDatas = () => ({
  type: HANDLE_DATAS,
});


export const productRecovery = (datas) => ({
  type: PRODUCT_RECOVERY,

  datas,
});

export const sendDatas = () => ({
  type: SEND_DATAS,
});
