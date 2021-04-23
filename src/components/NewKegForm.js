import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKegForm(props) {
  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      names: event.target.names.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcohol: parseInt(event.target.alcohol.value),
      pints: parseInt(event.target.pints.value),
      id: v4()
    });
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        buttonText="Add Keg" />
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;