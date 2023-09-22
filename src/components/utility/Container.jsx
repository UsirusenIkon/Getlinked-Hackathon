/* eslint-disable react/prop-types */
import React from "react";
import "./../../App.css";

export default function Container({ children, element, className, ...rest }) {
  const Comp = element;

  return (
    React.createElement(
      Comp,
      { className: `container ${className}`, ...rest },
      children
    )
  );
}
