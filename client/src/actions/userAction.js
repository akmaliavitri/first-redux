import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/akmaliavitri/fakedb/users")
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/akmaliavitri/fakedb/users/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/akmaliavitri/fakedb/users",
        data
      )
      .then(function (response) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/akmaliavitri/fakedb/users/" + id,
        data
      )
      .then(function (response) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "http://my-json-server.typicode.com/akmaliavitri/fakedb/users/" + id,
        
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      });
  };
};