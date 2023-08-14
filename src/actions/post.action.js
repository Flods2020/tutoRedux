import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export const getPosts = () => {
  return async (dispatch) => {
    return axios.get("http://localhost:3000/posts").then((res) => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};

export const addPosts = (post) => {
  return async (dispatch) => {
    return axios.post("http://localhost:3000/posts", post).then(() => {
      dispatch({ type: ADD_POSTS, payload: post });
    });
  };
};
