import { getAlbums, getPhotos, getTodos, getUsers } from "../api";
import {
  SET_ALBUMS,
  SET_PHOTOS,
  SET_TODOS,
  SET_USERS,
  TOGGLE_MENU,
} from "./types";

export const setTodos = async (dispatch) => {
  const data = await getTodos();

  console.log(data);

  dispatch({ type: SET_TODOS, payload: data });
};

export const toggleMenu = (dispatch) => {
  dispatch({ type: TOGGLE_MENU });
};

export const setUsers = async (dispatch) => {
  const data = await getUsers();

  console.log(data);

  dispatch({ type: SET_USERS, payload: data });
};

export const setAlbums = async (dispatch) => {
  const data = await getAlbums();

  console.log(data);

  dispatch({ type: SET_ALBUMS, payload: data });
};

export const setPhotos = async (dispatch) => {
  const data = await getPhotos();

  console.log(data);

  dispatch({ type: SET_PHOTOS, payload: data });
};
