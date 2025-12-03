import { SocialApi } from "../../api/api";

const LOGIN = "LOGIN";

const initState = {
  userId: null,
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

const loginAC = (data) => ({ type: LOGIN, payload: data });

export const loginThunk = (body) => {
  return (dispatch) => {
    SocialApi.login(body).then((res) => {
      dispatch(loginAC(res.data.data.userId));
      localStorage.setItem("userId", res.data.data.userId);
    });
  };
};
