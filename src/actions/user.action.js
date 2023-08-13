import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = () => {
  return async (dispatch) => {
    return axios.get("http://localhost:3000/users").then((res) => {
      dispatch({ type: GET_USER, payload: res.data });
    });
  };
};
