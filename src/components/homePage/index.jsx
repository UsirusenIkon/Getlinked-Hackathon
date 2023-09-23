import styles from './index.module.css';
import Button from './../utility/Button';
import Container from './../utility/Container';
import {
  bulbIcon,
  chainIcon,
  curvedIcon,
  guyIcon,
  sparkIcon,
  starIcon,
} from '../../assets';
import Overlay from '../utility/overlay';

export default function HomePage() {
  return (
    <section className={`b-bottom ${styles.homeWrap}`}>
      <Container element={'div'} className={` ${styles.home}`}>
      <div className={` ${styles.header}`}>
      <Overlay className={styles.bg} />
        <div className={styles.motto_wrap}>
          <h3 className={styles.motto}>
            Igniting a Revolution in HR Innovation
          </h3>
          <img src={curvedIcon} className={styles.line} />
        </div>
        <img src={starIcon} className={styles.star_1} />
        <div className={styles.header_wrap}>
          <h1 className={styles.header_txt}>
            <img src={bulbIcon} className={styles.bulb} />
            getlinked Tech
            <img src={starIcon} className={styles.star} />
            <br />
            Hackathon <span className="c-secondary">1.0</span>
            <img src={chainIcon} className={styles.h_icons} />
            <img src={sparkIcon} className={styles.h_icons} />
          </h1>
        </div>
        <p>
          Participate in getlinked tech Hackathon
          <br />
          2023 stand a chance to win a Big prize
        </p>
        <Button className={styles.btn}>
          <img src={starIcon} className={styles.star} />
          Register
        </Button>
        <h2 className={styles.count}>
          00<small className={styles.num}>h </small>
          00<small className={styles.num}>m </small>
          00<small className={styles.num}>s</small>
        </h2>
      </div>
      <div className={styles.guy_wrap}>
        <img src={guyIcon} className={styles.guy} />
        <Overlay className={styles.bg1} />
      </div>
    </Container>
    </section>
  );
}
