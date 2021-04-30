import kegSelectionReducer from "../../reducers/keg-selection-reducer";

describe("kegSelectionReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(kegSelectionReducer(null, { type: null })).toEqual(null);
  });
});