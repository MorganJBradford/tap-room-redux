import kegSelectionReducer from "../../reducers/keg-selection-reducer";
import * as c from "../../actions/ActionTypes";

describe("kegSelectionReducer", () => {

  const testData = {
    type: c.SELECT_KEG,
    names: "Righteous Whiskey",
    brand: "Brandolino's",
    price: 20,
    alcohol: 45,
    pints: 100,
    id: 1
  };

  test("Should return default state if no action type is recognized", () => {
    expect(kegSelectionReducer({}, { type: null })).toEqual({});
  });

  test("should return selected keg", () => {
    expect(kegSelectionReducer({}, testData)).toEqual({
      names: "Righteous Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1
    });
  });
});