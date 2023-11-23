import React, { useState } from "react";

let color = {
  Personal: "#4C49ED",
  Shopping: "#9D9BF4",
  Phone: "#4FD18B",
  Other: "#141197",
};
function Colors() {
  const divsArray = Object.keys(color).map((key) => (
    <div className="inside__color" key={key}>
      <div
        className="color"
        style={{
          backgroundColor: color[key],
        }}
      ></div>
      <p>{key}</p>
    </div>
  ));

  //   console.log('divsArray', divsArray)
  return <div className="colors">{divsArray}</div>;
}

export default Colors;
