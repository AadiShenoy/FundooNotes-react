import { ActionTypes } from "../constants/action-types";

const initialState = {
  notes: [],
  filteredNotes:[]
};

export const noteReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NOTES:
      return {...state,notes:payload}
    case ActionTypes.SET_FILTERED_NOTES:
        return {...state,filteredNotes:payload}
    default:
      return state;
  }
};

