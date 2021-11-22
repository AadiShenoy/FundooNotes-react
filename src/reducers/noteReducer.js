import { ActionTypes } from "../constants/action-types";

const initialState = {
  notes: [],
  filteredNotes: [],
  title: "Notes",
  listView:false
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_NOTES:
      return { ...state, notes: payload };
    case ActionTypes.SET_FILTERED_NOTES:
      return { ...state, filteredNotes: payload };
    case ActionTypes.SET_TITLE:
      return { ...state, title: payload };
    case ActionTypes.ADD_NEW_NOTE:
      return { ...state, notes: [...state.notes, payload] };
    case ActionTypes.LIST_VIEW:
      return {...state,listView:!state.listView}
    default:
      return state;
  }
};
