import kegListReducer from "../../reducers/keg-list-reducer";
import * as c from "../../actions/ActionTypes";

describe("kegListReducer", () => {

  let action;
  const kegData = {
  names: "Righteous Whiskey",
  brand: "Brandolino's",
  price: 20,
  alcohol: 45,
  pints: 100,
  id: 1,
  };
  const currentState = {
    1: {
      names: "Test Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1,
    },
    2: {
      names: "Test Margarita",
      brand: "Brando's",
      price: 10,
      alcohol: 25,
      pints: 50,
      id: 2,
    }
  };
  
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect (kegListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new keg data to mainKegList", () => {
    const { names, brand, price, alcohol, pints, id, } = kegData;
    action = {
      type: c.ADD_KEG,
      names: names,
      brand: brand,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        brand: brand,
        price: price,
        alcohol: alcohol,
        pints: pints,
        id: id
      }
    });
  });

  test("Should successfully delete a keg", () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };

    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        names: "Test Margarita",
        brand: "Brando's",
        price: 10,
        alcohol: 25,
        pints: 50,
        id: 2,
      }
    });
  });
});