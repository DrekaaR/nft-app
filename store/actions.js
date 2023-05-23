export const updateAppBackground = (dispatch, state) => {
  return dispatch({
    type: "APP_BACKGROUND_UPDATED",
    payload: state,
  });
};

export const updateHeaderSticker = (dispatch, state) => {
  return dispatch({
    type: "HEADER_STICKER_UPDATED",
    payload: state,
  });
};

export const updateLoader = (dispatch, state) => {
  return dispatch({
    type: "LOADER_UPDATED",
    payload: state,
  });
};