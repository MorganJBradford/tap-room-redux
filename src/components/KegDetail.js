import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;
  function decrementPintsByOne() {
    if (keg.pints > 0) {
      keg.pints = keg.pints-1;
      onClickingSell(keg);
    } else {
      alert("Can't have less than 0! Perhaps try deleting the keg.");
    }
  }
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.names} - Brand: {keg.brand}</h3>
      <p>Price: ${keg.price}/pint</p>
      <p>Alcohol Content: <strong>{keg.alcohol}%</strong></p>
      <p><em>Availability: {keg.pints}pts</em></p>
      <button onClick={ onClickingEdit }>Edit Keg</button>
      <button onClick={ decrementPintsByOne }>Sell one pint</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;