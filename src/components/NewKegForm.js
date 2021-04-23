import React from "react";
import { v4 } from "uuid";

function NewKegForm() {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
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
      </form>
    </>
  );
}

export default NewKegForm;