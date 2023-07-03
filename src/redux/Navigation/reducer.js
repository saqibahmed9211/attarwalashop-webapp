import { TOGGLE_CATEGORY_MENU } from "./types";

const INITIAL_STATE = {
  showCategoryMenu: false
}

const NavigationReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TOGGLE_CATEGORY_MENU:
      return {
        ...state,
        showCategoryMenu: !state.showCategoryMenu
      }
    default:
      return state;
  }
}

export default NavigationReducer;