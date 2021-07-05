import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hex = rgbToHex(...rgb);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
        setTimeout(() => setAlert(false), 1000);
      }}
      className={`color ${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to clipboard </p>}
    </article>
  );
};

export default SingleColor;
