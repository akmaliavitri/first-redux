import {GET_USERS_LIST } from '../actions/userAction'

let initialState = {
  getUserList: false,
  errorUserList: false,
  title: "Ecommerce", 
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        errorUserList: action.payload.errorMessage
      }
  
    default:
      return state
  }
};

export default users;
