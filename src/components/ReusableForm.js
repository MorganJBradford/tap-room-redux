import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          required
          type="text"
          name="names"
          placeholder="Beverage Name" />
        <input
          required
          type="text"
          name="brand"
          placeholder="Brand Name" />
        <input
          required
          type="number"
          min="0"
          name="price"
          placeholder="Dollars/pint" />
        <input
          required
          type="number"
          min="0"
          max="96"
          name="alcohol"
          placeholder="Percentage Alcohol Content" />
        <input
          required
          type="number"
          min="1"
          max="124"
          name="pints"
          placeholder="Pints Available" />
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;