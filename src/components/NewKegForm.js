import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      names: event.target.names.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      id: v4()
    });
  }
  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          name="names"
          placeholder="Beverage Name" />
        <input
          type="text"
          name="brand"
          placeholder="Brand Name" />
        <input
          type="text"
          name="price"
          placeholder="Price" />
        <input
          type="text"
          name="alcohol"
          placeholder="Alcohol Content" />
        <button type="submit">Add Keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;