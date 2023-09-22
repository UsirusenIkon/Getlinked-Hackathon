import { lock1Icon, lockIcon } from '../../assets';
import Button from '../utility/Button';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';

export default function Terms() {
  return (
    <Wrapper
      wrapClass={styles.terms_wrapper}
      className={styles.terms}
      header1={'Privacy Policy and'}
      header2={'Terms'}
      head_txt={'Last updated on September 12, 2023'}
      children1={
        <div className={styles.bg_img}>
          <img src={lockIcon} className={`l-img ${styles.img}`} alt="img" />
          <img src={lock1Icon} className={styles.img1} alt="img" />
        </div>
      }
      children2={
        <>
          <p className={styles.p_intro}>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className={styles.terms_wrap}>
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className={styles.nxthead}>
              <h3>Licensing Policy</h3>
              <span>Here are terms of our Standard License:</span>
            </div>
            <div className={`flex gap ${styles.policies}`}>
              <span>✅</span>
              <p>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className={`flex gap ${styles.policies}`}>
              <span>✅</span>
              <p>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
          <Button>Read More</Button>
          </div>
        </>
      }
    />
  );
}
