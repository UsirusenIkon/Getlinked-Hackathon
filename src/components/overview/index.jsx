import { arrowIcon, ideaIcon, starIcon } from '../../assets';
import Wrapper from '../utility/wrapper';
import styles from "./index.module.css"

export default function Overview() {
  return (
    <Wrapper id={'overview'}
    children1={
      <>
        <img src={starIcon} className={styles.star_1} />
        <img src={ideaIcon} className={`f-width ${styles.ideaImg}`} />
        <img src={arrowIcon} className={styles.arrow} />
      </>
    }
    header1={'Introduction to getlinked'}
    header2={'tech Hackathon 1.0'}
    className={'f-column f-row'}
    children2={
      <>
        <img src={starIcon} className={styles.star_2} />
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose
          is as clear as day: to shape the future. Whether you`re a coding
          genius, a design maverick, or a concept wizard, {`you'll`} fff have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating
          solutions that can change the world, {`that's`} what {`we're`} all about!
        </p>
      </>
    }
    />
  );
}
