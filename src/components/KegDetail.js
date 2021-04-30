import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit, onClickingSell } = props;
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.names} - Brand: {keg.brand}</h3>
      <p>Price: ${keg.price}/pint</p>
      <p>Alcohol Content: <strong>{keg.alcohol}%</strong></p>
      <p><em>Availability: {keg.pints}pts</em></p>
      <button onClick={ onClickingEdit }>Edit Keg</button>
      <button onClick={()=> onClickingSell(keg.id) }>Sell one pint</button>
      <button onClick={()=> onClickingDelete(keg.id)}>Remove Keg</button>
      <hr />
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;