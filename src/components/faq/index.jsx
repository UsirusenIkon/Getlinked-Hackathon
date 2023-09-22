import { faQIcon, faqIcon, starIcon } from '../../assets';
import Wrapper from '../utility/wrapper';
import { faqObj } from './faqObj';
import styles from './index.module.css';

export default function Faq() {
  return (
    <Wrapper id={'faq'}
      children1={
        <div className={`${styles.img_wrap}`}>
          <img
            className={`l-img f-width ${styles.img}`}
            src={faqIcon}
            alt="rulesIcon"
          />
          <div className={`${styles.icon_wrap}`}>
            <img className={styles.star} src={starIcon} alt="rulesIcon" />
            <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
            <img className={styles.star_3} src={starIcon} alt="rulesIcon" />
            <img className={styles.star_4} src={starIcon} alt="rulesIcon" />
            <img className={styles.faQ} src={faQIcon} alt="rulesIcon" />
            <img className={styles.faQ_1} src={faQIcon} alt="rulesIcon" />
            <img className={styles.faQ_2} src={faQIcon} alt="rulesIcon" />
          </div>
        </div>
      }
      header1={'Frequently Ask'}
      header2={'Question'}
      className={`f-reverse ${styles.faq}`}
      children2={
        <>
          <p>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          {faqObj.map((item) => (
            <div key={item.id} className={`flex align-y f-row s-btw ${styles.faqs}`}>
              <span className={styles.question}>{item.faq}</span>
              <span className={styles.plus}>+</span>
            </div>
          ))}
        <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
        </>
      }
    />
  );
}
