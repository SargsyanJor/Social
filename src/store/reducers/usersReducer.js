import { SocialApi } from "../../api/api";

const GET_USERS = "get/users";
const IS_LOADING = "is/loading";
const CHANGE_PAGE = "change/page";
const TOTAL_USERS_COUNT = "total/users/count";

const initState = {
  users: [],
  isLoading: false,
  currentPage: 1,
  totalUserCount: 0,
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUserCount: action.payload,
      };
    default: {
      return state;
    }
  }
};

const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool });
export const changePageAC = (newPage) => ({
  type: CHANGE_PAGE,
  payload: newPage,
});
const totalUserCountAC = (data) => ({ type: TOTAL_USERS_COUNT, payload: data });

export const usersThunkCreator = (page) => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));

    SocialApi.getUsers(page).then((res) => {
      dispatch(totalUserCountAC(res.data.totalCount))
      dispatch(getUsersAC(res.data.items));
      dispatch(isLoadingAC(false));
    });
  };
};
