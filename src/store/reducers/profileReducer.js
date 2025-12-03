import { SocialApi } from "../../api/api";

const GET_PROFILE = "get/profile";

const initState = {
  profile: null,
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

const getProfileAC = (profileData) => ({ type: GET_PROFILE, payload: profileData });

export const profileThunk = (userId) => {
  return (dispatch) => {
    SocialApi.profileUsers(userId).then((res) =>
      dispatch(getProfileAC(res.data))
    );
  };
};
