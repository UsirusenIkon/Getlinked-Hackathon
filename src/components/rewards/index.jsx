import { prizeIcon, rewardsIcon } from '../../assets';
import Container from '../utility/Container';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';

export default function Rewards() {
  return (
    // <section>
    //   <Container element={'div'} className={styles.rewards}>
    //     <div className={styles.header}>
    //       <h2>
    //         Prizes and
    //         <span className={styles.h_span}>Rewards</span>
    //       </h2>
    //       <p>
    //         Highlight of the prizes or rewards for winners and for participants.
    //       </p>
    //     </div>
    //   </Container>
    // </section>
    <Wrapper
      className={styles.wrap}
      children1={
        <img src={prizeIcon} className={styles.prize} alt="prize" />
      }
      header1={'Prizes and'}
      header2={'Rewards'}
      classHead={styles.header}
      head_txt={
        'Highlight of the prizes or rewards for winners and for participants.'
      }
      children2={
        <div>
          <img src={rewardsIcon} className={`f-width ${styles.reward}`} alt="prize" />
        </div>
      }
    />
  );
}
