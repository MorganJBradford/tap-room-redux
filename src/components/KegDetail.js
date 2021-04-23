import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingEdit } = props;
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.names} - {keg.brand}</h3>
      <p>{keg.price}</p>
      <p><strong>{keg.alcohol}</strong></p>
      <button onClick={ onClickingEdit }>Edit Keg</button>
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