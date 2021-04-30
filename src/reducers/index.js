import { combineReducers } from "redux";
import editingKegReducer from "./editing-keg-reducer";
import formVisibleReducer from "./form-visible-reducer";
import kegListReducer from "./keg-list-reducer";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainKegList: kegListReducer,
  editingKeg: editingKegReducer
});

export default rootReducer;