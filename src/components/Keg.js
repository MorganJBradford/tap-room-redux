import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>Name: {props.names}</h2>
        <h3>Brand: {props.brand}</h3>
        <h4>Price: ${props.price}/pint</h4>
        <h4>Alcohol: {props.alcohol}%</h4>
        <h4>Availability: {props.pints}pts</h4>
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