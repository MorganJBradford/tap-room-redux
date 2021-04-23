import React from "react";
import Keg from "./Keg";

function KegList() {
  return (
    <>
      {mainKegList.map((keg, index) =>
        <Keg names={keg.names}
        brand={keg.brand}
        price={keg.price}
        alcohol={keg.alcohol}
        key={index} />
      )}
    </>
  );
}

export default KegList;