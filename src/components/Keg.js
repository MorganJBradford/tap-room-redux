import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h2>Name: {props.names}</h2>
        <h2>Brand: {props.brand}</h2>
        <h2>Price: {props.price}</h2>
        <h2>Alcohol: {props.alcohol}</h2>
        <hr/>
      </div>
    </>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcohol: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Keg;