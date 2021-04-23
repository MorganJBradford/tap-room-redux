import React from "react";

function Keg() {
  const names = "Jerry";
  const brandName = "Jack";
  const price = "$15";
  const booze = "Jerry";
  return (
    <>
      <h2>Name: {names}</h2>
      <h2>Brand: {brandName}</h2>
      <h2>Price: {price}</h2>
      <h2>Alcohol: {booze}</h2>
    </>
  );
}

export default Keg;