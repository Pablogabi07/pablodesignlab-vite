// src/components/NubiGuide.jsx
import React from "react";
import "./NubiGuide.css";

export default function NubiGuide({ image, text, position = "right", extraClass = "" }) {
  return (
    <div className={`nubi-container nubi-${position} ${extraClass}`}>
      <img src={image} alt="Nubi" className="nubi-img" />
      <div className="nubi-bubble">{text}</div>
    </div>
  );
}

