import { sponsorsIcon, starIcon } from '../../assets';
import Overlay from '../utility/overlay';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';

export default function Sponsors() {
  return (
    <Wrapper
      classHead={styles.head}
      header1={'Partners and Sponsors'}
      head_txt={
        'Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors'
      }
      children2={
        <>
          <img src={sponsorsIcon} className={styles.img} alt="img" />
          <img className={styles.star} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
          <Overlay className={styles.overlay} />
          <Overlay className={styles.overlay_1} />
        </>
      }
    />
  );
}
