/* eslint-disable react/prop-types */
import "./../../App.css";

export default function Button({className, children, ...buttonProps}) {
  return (
    <button className={`btn ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}