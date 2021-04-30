import * as c from "../actions/ActionTypes";
export default (state = {}, action) => {
  const { names, brand, price, alcohol, pints, id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      return Object.assign({}, {
          names: names,
          brand: brand,
          price: price,
          alcohol: alcohol,
          pints: pints,
          id: id
      });
    default:
      return state;
  }
};