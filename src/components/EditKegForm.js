import React from "react";
import ReusableForm from "./ReusableForm";

function EditKegForm(props) {
  function handleEditKegFormSubmission(){
    
  }
  return (
    <>
      <ReusableForm
        formSubmissionHandler={props.handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </>
  );
}

export default EditKegForm;