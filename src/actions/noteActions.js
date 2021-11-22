import { ActionTypes } from "../constants/action-types";

export const setNotes = (notes) => {
  return {
    type: ActionTypes.SET_NOTES,
    payload: notes,
  };
};

export const setFilteredNotes = (notes) => {
  return {
    type: ActionTypes.SET_FILTERED_NOTES,
    payload: notes,
  };
};

export const setTitle = (title) => {
  return {
    type: ActionTypes.SET_TITLE,
    payload: title,
  };
};

export const addNewNote = (note) => {
  return {
    type: ActionTypes.ADD_NEW_NOTE,
    payload: note,
  };
};

export const listView = (flag) => {
  return {
    type: ActionTypes.LIST_VIEW,
    payload: flag,
  };
};

export const updateNote = (note) => {
  return {
    type: ActionTypes.UPDATE_NOTE,
    payload: note,
  };
};
