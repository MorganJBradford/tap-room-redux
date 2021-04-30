import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import rootReducer from "../../reducers/index";
import kegListReducer from "../../reducers/keg-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false
    });
  });

  test("Check initial state of kegListReducer matches rootReducer", () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test("Check that initial state of formVisibleReducer matches rootReducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});