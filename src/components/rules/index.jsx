import { rulesIcon, starIcon } from '../../assets';
import Overlay from '../utility/overlay';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';

export default function Rules() {
  return (
    <Wrapper
      children1={
        <div className={styles.img_bg}>
          <img className={`l-img f-width ${styles.img}`} src={rulesIcon} alt="rulesIcon" />
          <img className={styles.star} src={starIcon} alt="rulesIcon" />
          <Overlay className={styles.bg} />
        </div>
      }
      header1={'Rules and'}
      header2={'Guidelines'}
      className={'f-column f-reverse'}
      children2={
        <>
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!'
          </p>
          <Overlay className={styles.bg1} />
          <img className={styles.star1} src={starIcon} alt="rulesIcon" />
        </>
      }
    />
  );
}
