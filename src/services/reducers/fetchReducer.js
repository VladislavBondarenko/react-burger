import { checkResponse } from "../../utils/checkResponse";

export const BASE_URL = "https://norma.nomoreparties.space/api/";

export const createFetchReducer = (BASE_URL) => {
  const prefix = BASE_URL;
  const initialState = {
    data: null,
    error: null,
    status: "STALE",
  };

  const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
      case `${prefix}-fetch`: {
        return {
          data: null,
          error: null,
          status: "LOADING",
        };
      }
      case `${prefix}-fail`: {
        return {
          data: null,
          error: action.payload,
          status: "FAILED",
        };
      }
      case `${prefix}-success`: {
        return {
          data: action.payload,
          error: null,
          status: "SUCCESS",
        };
      }
      default: {
        return state;
      }
    }
  };

  const getAction = () => async (dispatch) => {
    try {
      dispatch({
        type: `${prefix}-fetch`,
      });
      const result = await fetch(BASE_URL).then(checkResponse);
      dispatch({
        type: `${prefix}-success`,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: `${prefix}-fail`,
        payload: err,
      });
    }
  };

  return {
    getAction,
    fetchReducer,
  };
};
