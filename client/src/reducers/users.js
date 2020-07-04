import { GET_USERS_LIST, GET_USERS_DETAIL } from "../actions/userAction";

let initialState = {
  getUserList: false,
  getUserDetail: false,
  errorUserList: false,
  errorUserDetail: false,
  title: "Ecommerce",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case GET_USERS_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default users;
