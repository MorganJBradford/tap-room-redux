import * as c from "../../actions/ActionTypes";
import selectedKegReducer from "../../reducers/selected-keg-reducer";

describe("selectedKegReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectedKegReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle edit keg state to true", () => {
    expect(selectedKegReducer(false, { type: c.TOGGLE_EDIT_KEG })).toEqual(true);
  });
});