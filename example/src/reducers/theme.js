import { TOGGLE_THEME } from "../actionTypes";
import storage from "local-redux-storage";

const theme = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return !state;
    default:
      return state;
  }
};

export default storage(theme, "theme");
