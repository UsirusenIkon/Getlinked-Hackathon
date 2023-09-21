import { criteriaIcon, starIcon } from '../../assets';
import { citeriaObj } from './criteria';
import Button from '../utility/Button';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';
import Overlay from '../utility/overlay';

export default function Criteria() {
  return (
    <Wrapper
      children1={
        <>
          <img className={`l-img f-width ${styles.img}`} src={criteriaIcon} alt="rulesIcon" />
          <img className={styles.star} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
          <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
          <Overlay className={styles.bg} />
        </>
      }
      header1={'Judging Criteria'}
      header2={'Key attributes'}
      className={`f-column f-row ${styles.criteria}`}
      children2={
        <>
          {citeriaObj.map((item) => (
            <p key={item.title} className={styles.text}>
              <span className={styles.title}>{item.title}</span>: {item.text}
            </p>
          ))}
          <Overlay className={styles.bg1} />
          <Button className={styles.btn}>Read More</Button>
          <img className={styles.star_3} src={starIcon} alt="rulesIcon" />
        </>
      }
    />
  );
}
