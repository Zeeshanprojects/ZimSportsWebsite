import React from "react";
import Image from "../assets/Images/image";
import "../assets/CSS/Preloader.css";

export default function Preloader() {
  return (
    <div className="preloader-container">
      <img src={Image.logo} alt="logo" className="preloader-logo" />
    </div>
  );
}
