import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <>
      <h1>Keg Detail</h1>
      <h3>{keg.names} - {keg.brand}</h3>
      <p>{keg.price}</p>
      <p><strong>{keg.alcohol}</strong></p>
      <hr />
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;