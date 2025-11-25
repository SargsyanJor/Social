import { SocialApi } from "../../api/api";

const GET_USERS = "get/users";
const IS_LOADING = "is/loading";

const initState = {
  users: [],
  isLoading: false,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool });

export const usersThunkCreator = () => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));

    SocialApi.getUsers().then((res) => {
      dispatch(getUsersAC(res.data.items));
      dispatch(isLoadingAC(false));
    });
  };
};
