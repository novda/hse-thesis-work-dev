import React from "react";
import "./spinner.scss";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner-text">
        <h3>Getting posts for you</h3>
      </div>
      <div className="loading-spinner"></div>
    </div>
  );
}
