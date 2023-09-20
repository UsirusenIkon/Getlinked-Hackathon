import { arrowIcon, ideaIcon, starIcon } from '../../assets';
import Container from '../utility/Container';
import styles from "./index.module.css"

export default function Overview() {
  return (
    <section
      className={`flex align-y align-x b-bottom ${styles.overview}`}
    >
      <Container element={'div'} className={`grid ${styles.wrap}`}>
        <div className={'flex f-column align-y'}>
          <img src={starIcon} className={styles.star_1} />
          <img src={ideaIcon} className={`f-width ${styles.ideaImg}`} />
          <img src={arrowIcon} className={styles.arrow} />
        </div>
        <div className={`f-width ${styles.txt}`}>
          <img src={starIcon} className={styles.star_2} />
          <h3 className={styles.header}>Introduction to getlinked <br /> <span className={styles.h_intro}>tech Hackathon 1.0</span></h3>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </Container>
    </section>
  );
}
