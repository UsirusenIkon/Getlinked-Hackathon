import { prizeIcon, rewardsIcon, starIcon } from '../../assets';
import Overlay from '../utility/overlay';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';

export default function Rewards() {
  return (
    <Wrapper
      wrapClass={styles.rewards_wrap}
      className={styles.wrap}
      children1={
        <>
          <img src={prizeIcon} className={`l-img ${styles.prize}`} alt="prize" />
          <img className={styles.star} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
          <Overlay className={styles.overlay} />
        </>
      }
      header1={'Prizes and'}
      header2={'Rewards'}
      classHead={styles.header}
      head_txt={
        'Highlight of the prizes or rewards for winners and for participants.'
      }
      children2={
        <div>
          <img
            src={rewardsIcon}
            className={`f-width ${styles.reward}`}
            alt="prize"
          />
          <img className={styles.star_3} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_4} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_5} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_6} src={starIcon} alt="rulesIcon" />
          <Overlay className={styles.overlay_2} />
        </div>
      }
    />
  );
}
