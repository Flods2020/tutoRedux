import { ADD_POSTS, EDIT_POSTS, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      return [action.payload, ...state];
    case EDIT_POSTS:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            auteur: action.payload.auteur,
            content: action.payload.content,
          };
        } else return post;
      });
    default:
      return state;
  }
}
