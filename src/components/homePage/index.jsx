import styles from "./index.module.css"

export default function HomePage() {
  return (
    <div className={`flex ${styles.home}`}>
      <div className={`f-height ${styles.header}`}>
        <div className={`${styles.overlay}`}>
          {/* <img className={`${styles.img}`} src="src\assets\Purple-Lens-Flare-PNG.png" /> */}
          <img className={`${styles.img}`} src="src\assets\Purple-Lens-mobile.png" />
        </div>
      {/* <h1>HomePage</h1> */}
      </div>
      {/* <div className={`f-height ${styles.img}`}>
        <h1>Page</h1>
      </div> */}
    </div>
  )
}
