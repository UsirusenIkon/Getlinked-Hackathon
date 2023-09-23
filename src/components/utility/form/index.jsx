/* eslint-disable react/prop-types */
import { girlIcon, manIcon } from '../../../assets';
import styles from './index.module.css';

export default function Form({ children, ...formProps }) {
  return (
    <form className={`grid ${styles.form}`} {...formProps}>
    {location.pathname === '/contact' ? (
        <>
          <h3>Questions or need assistance?</h3>
          <h3>Let us know about it!</h3>
          <p className={styles.nil}>
            Email us below to any question related to our event
          </p>
          {children}
        </>
      ) : (
        <>
          <h3>Register</h3>
          <div className={`flex gap ${styles.regisM}`}>
            <span>Be part of this movement!</span>
            <div className={`flex align-x ${styles.regImgWrap}`}>
              <img src={girlIcon} alt="girl" />
              <img src={manIcon} alt="man" />
            </div>
          </div>
          <h5>CREATE YOUR ACCOUNT</h5>
          {children}
        </>
      )}
    </form>
  );
}
