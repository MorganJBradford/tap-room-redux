import React from "react";

function Keg(props) {
  return (
    <>
      <h2>Name: {props.names}</h2>
      <h2>Brand: {props.brand}</h2>
      <h2>Price: {props.price}</h2>
      <h2>Alcohol: {props.alcohol}</h2>
    </>
  );
}

export default Keg;