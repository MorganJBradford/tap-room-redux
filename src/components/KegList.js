import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <>
      <hr />
      {Object.values(props.kegList).map((keg) =>
        <Keg
        whenKegClicked={props.onKegSelection}
        names={keg.names}
        brand={keg.brand}
        price={keg.price}
        alcohol={keg.alcohol}
        pints={keg.pints}
        id={keg.id}
        key={keg.id} />
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;