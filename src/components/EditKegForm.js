import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({
      names: event.target.names.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      alcohol: parseInt(event.target.alcohol.value),
      pints: parseInt(event.target.pints.value),
      id: keg.id
    });
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;