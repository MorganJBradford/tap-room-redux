import * as c from "./ActionTypes";

export const deleteKeg = (id) => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { names, brand, price, alcohol, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    names: names,
    brand: brand,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
} 

export const editingKeg = () => ({
  type: c.TOGGLE_EDIT_KEG
});