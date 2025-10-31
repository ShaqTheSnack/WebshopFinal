import React from "react";
import CoverImage from "../../assets/RandomCover.jpg";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover">
      <img src={CoverImage} alt="Cover" />
      <div className="coverOverlay">
  <h2 className="coverTitle">Welcome - AURO</h2>
      </div>
    </div>
  );
};

export default Cover;
