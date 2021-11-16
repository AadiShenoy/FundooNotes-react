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
