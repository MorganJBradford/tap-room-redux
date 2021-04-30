import { createStore } from "redux";
import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import rootReducer from "../../reducers/index";
import editingKegReducer from "../../reducers/editing-keg-reducer"
import kegListReducer from "../../reducers/keg-list-reducer";
import kegSelectionReducer from "../../reducers/keg-selection-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainKegList: {},
      formVisibleOnPage: false,
      editingKeg: false,
      selectedKeg: {}
    });
  });

  test("Check initial state of kegListReducer matches rootReducer", () => {
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test("Check that initial state of formVisibleReducer matches rootReducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test("Check that initial state of editingKegReducer matches rootReducer", () => {
    expect(store.getState().editingKeg).toEqual(editingKegReducer(undefined, { type: null }));
  });

  test("Check that initial state of editingKegReducer matches rootReducer", () => {
    expect(store.getState().selectedKeg).toEqual(kegSelectionReducer(undefined, { type: null }));
  });

  test("Check that ADD_KEG action works for kegListReducer and rootReducer", () => {
    const action = {
      type: c.ADD_KEG,
      names: "Test Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainKegList).toEqual(kegListReducer(undefined, action));
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and rootReducer", () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test("Check that TOGGLE_EDIT_KEG action works for editingKegReducer and rootReducer", () => {
    const action = a.editingKeg();
    store.dispatch(action);
    expect(store.getState().editingKeg).toEqual(editingKegReducer(undefined, action));
  });

  test("Check that SELECT_KEG action works for kegSelectionReducer and rootReducer", () => {
    const action = {
      type: c.SELECT_KEG,
      names: "Test Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(kegSelectionReducer(undefined, action));
  });

});