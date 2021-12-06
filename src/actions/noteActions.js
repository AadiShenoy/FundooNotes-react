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

export const listView = () => {
  return {
    type: ActionTypes.LIST_VIEW,
  };
};

export const updateNote = (note) => {
  return {
    type: ActionTypes.UPDATE_NOTE,
    payload: note,
  };
};

export const deleteNote = (note) => {
  return {
    type: ActionTypes.DELETE_NOTE,
    payload: note,
  };
};


export const setTrashNotes = (note) => {
  return {
    type: ActionTypes.SET_TRASH_NOTES,
    payload: note,
  };
};

export const removeTrashNote = (note) => {
  return {
    type: ActionTypes.REMOVE_TRASH_NOTE,
    payload: note,
  };
};

export const addTrashNote = (note) => {
  return {
    type: ActionTypes.ADD_TRASH_NOTE,
    payload: note,
  };
};

export const emptyTrash = () => {
  return {
    type: ActionTypes.EMPTY_TRASH,
  };
};

