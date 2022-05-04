import React from "react";
import "./News.scss"

export function News({id, title, text, onClick}) {
  return (
    <div id={id} className="newsSingle" onClick={onClick}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}