/* eslint-disable react/prop-types */
export default function Svg ({className, width='1.5rem', height='1.5rem', width_2='100%', href, onClick}) {
  return (
    <svg onClick={onClick}
      className={`svg_icon ${className}`} 
      width={width}
      height={height}>
      <use width={width_2} href={href}></use>
    </svg>
  )
}
