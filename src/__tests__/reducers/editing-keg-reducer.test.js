import * as c from "../../actions/ActionTypes";
import editingKegReducer from "../../reducers/editing-keg-reducer";

describe("editingKegReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editingKegReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle editing keg state to true", () => {
    expect(editingKegReducer(false, { type: c.TOGGLE_EDIT_KEG })).toEqual(true);
  });
});