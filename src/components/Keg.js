import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>Name: {props.names}</h2>
        <h2>Brand: {props.brand}</h2>
        <h2>Price: ${props.price}/pint</h2>
        <h2>Alcohol: {props.alcohol}%</h2>
        <h2>Availability: {props.pints}pts</h2>
        <hr/>
      </div>
    </>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;