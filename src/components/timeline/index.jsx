import { starIcon } from '../../assets';
import Container from '../utility/Container';
import styles from './index.module.css';
import { timelineObj } from './timelineObj';

export default function Timeline() {
  return (
    <Container element={'section'} className={`flex ${styles.timeline}`}>
      <div className="flex f-column gap">
        <h2>Timeline</h2>
        <p className={styles.info}>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <img className={styles.star} src={starIcon} alt="rulesIcon" />
      </div>
      <div className={`flex f-column ${styles.order_wrap}`}>
        {timelineObj.map((item) => (
          <div key={item.title} className={`flex align ${styles.order}`}>
            <p className={styles.order_text}>
              <span className={styles.title}>{item.title}</span>
              {item.text}
            </p>
            <div className={`flex f-column align-y gap ${styles.numline}`}>
              <span className={styles.line} />
              <span className={`flex align-x align-y ${styles.number}`}>{item.number}</span>
            </div>
            <span className={`f-width ${styles.title}`}>November 18, 2023</span>
          </div>
        ))}
        <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
        <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
      </div>
    </Container>
  );
}
