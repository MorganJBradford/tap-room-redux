import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <hr />
      {props.kegList.map((keg, index) =>
        <Keg names={keg.names}
        brand={keg.brand}
        price={keg.price}
        alcohol={keg.alcohol}
        key={index} />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;