import initialState from "./initialState";
import { SET_ALBUMS, SET_TODOS, SET_USERS, TOGGLE_MENU } from "./types";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };

    case SET_USERS:
      return { ...state, users: action.payload };

    case SET_ALBUMS:
      return { ...state, users: action.payload };

    case TOGGLE_MENU:
      return { ...state, isSidebarShow: !state.isSidebarShow };

    default:
      return state;
  }
};

export default reducer;