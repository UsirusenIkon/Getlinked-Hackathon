/* eslint-disable react/prop-types */
import Container from '../Container';
import styles from "./wrapper.module.css"

export default function Wrapper({className, children1, header1, header2, children2, head_txt, classHead, wrapClass, id}) {
  return (
    <section id={id}
      className={`flex align-y align-x b-bottom ${wrapClass} ${styles.wrapper}`}
    >
      <Container element={'div'} className={`flex f-column ${className} ${styles.wrap}`}>
        <div className={`flex f-width f-column align-x align-y`}>
          {children1}
        </div>
        <div className={`flex align-x f-width f-column ${styles.txt}`}>
          <div className={classHead}>
            <h2 className={styles.header}>{header1}<br />
              <span className={styles.h_intro}>{header2}</span>
            </h2>
            <p>{head_txt}</p>
          </div>
          {children2}
        </div>
      </Container>
    </section>
  );
}
