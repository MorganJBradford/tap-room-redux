import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes"

describe("tap-room actions", () => {
  it("deleteKeg should create DELETE_KEG action", () => {
    expect(a.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    })
  });

  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it("editingKeg should create TOGGLE_EDIT_KEG action", () => {
    expect(a.editingKeg()).toEqual({
      type: c.TOGGLE_EDIT_KEG
    });
  });

  it("addKeg should create ADD_KEG action", () => {
    expect(a.addKeg({
      names: "Test Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1,
    })).toEqual({
      type: c.ADD_KEG,
      names: "Test Whiskey",
      brand: "Brandolino's",
      price: 20,
      alcohol: 45,
      pints: 100,
      id: 1,
    });
  });
});