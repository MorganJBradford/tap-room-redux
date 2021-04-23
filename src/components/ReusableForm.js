import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{prop.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;