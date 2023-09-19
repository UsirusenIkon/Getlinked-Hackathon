import "./../../App.css";
import React from "react";

export default function Button({className, children, ...buttonProps}) {
  return (
    <button className={`btn ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}