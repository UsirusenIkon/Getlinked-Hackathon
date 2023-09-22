import {
  contactIcon,
  fbIcon,
  igIcon,
  linkedInIcon,
  locationIcon,
  starIcon,
  xIcon,
} from '../../assets';
import Container from '../utility/Container';
import Svg from '../utility/Svg';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer_wrap}`}>
      <Container element={'div'} className={`flex ${styles.footer}`}>
        <div style={{position: 'relative'}}>
          <img className={styles.star} src={starIcon} alt="rulesIcon" />
          <h5>
            get<span className={`c-secondary ${styles.h_txt}`}>linked</span>
          </h5>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div>
            <span className={styles.terms}>Terms of Use</span>
            <span className={styles.terms}>Privacy Policy</span>
          </div>
        </div>
        <div>
        <img className={styles.star_1} src={starIcon} alt="rulesIcon" />
          <h6 className="c-secondary">Useful Links</h6>
          <span className={styles.span}>Overview</span>
          <span className={styles.span}>Timeline</span>
          <span className={styles.span}>FAQs</span>
          <span className={styles.span}>Register</span>
          <div className="flex align-y gap">
            <span className="c-secondary">Follow us</span>
            <div className="flex align-x gap">
              <Svg width="2rem" href={igIcon} />
              <Svg width="2rem" href={xIcon} />
              <Svg width="2rem" href={fbIcon} />
              <Svg width="2rem" href={linkedInIcon} />
            </div>
          </div>
        </div>
        <div className="flex f-column gap">
          <img className={styles.star_2} src={starIcon} alt="rulesIcon" />
          <h6 className="c-secondary">Contact us</h6>
          <div className="flex align-y">
            <Svg width="2rem" href={contactIcon} />
            <span>+234 6707653444</span>
          </div>
          <div className="flex gap">
            <Svg width="2rem" href={locationIcon} />
            <span>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</span>
          </div>
          <img className={styles.star_3} src={starIcon} alt="rulesIcon" />
        </div>
      </Container>
        <p>All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
}
