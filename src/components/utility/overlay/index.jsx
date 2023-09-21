/* eslint-disable react/prop-types */
import styles from './index.module.css'

export default function Overlay({className}) {
  return (
    <div className={`f-width ${className} ${styles.overlay}`} />
  )
}
