import { arrowLeftIcon, fbIcon, igIcon, linkedInIcon, starIcon, xIcon } from '../../assets';
import Svg from '../utility/Svg';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';
import Button from '../utility/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../utility/form';
import Input from '../utility/form/Input';
import Overlay from '../utility/overlay';

export default function ContactPage() {
  const [success, setSuccess] = useState('');
  const [data, setData] = useState({
    email: '',
    first_name: '',
    message: '',
  });

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const response = await fetch(
        'https://backend.getlinked.ai/hackathon/contact-form',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(data),
        },
      );

      //  do something if it successful
      if (response.status === 201) {
        setSuccess('Sent ✅');
        setTimeout(() => {
          setSuccess('');
        }, 4000);
      } else{
        throw new Error(response.json())
      }
    } catch (error) {
      setSuccess('message not sent')
    }
  };

  return (
    <Wrapper
      wrapClass={styles.contact}
      className={styles.contact_wrap}
      children1={
        <div className={styles.getintouch}>
          <h2>Get In Touch</h2>          
          <Overlay className={styles.overlay} />
          <div className="flex gap s-btw f-column">
            <span>Contact <br /> Information</span>
            <span>
              {' '}
              <br />
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </span>{' '}
            <br />
            <span>Call Us: 07067981819</span> <br />
            <span>
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </span>
          </div>
          <div className={`flex f-column gap ${styles.share}`}>
            <span className='c-secondary'>share on</span>
            <div className='flex f-width gap'>
              <Svg width="2rem" href={igIcon} />
              <Svg width="2rem" href={xIcon} />
              <Svg width="2rem" href={fbIcon} />
              <Svg width="2rem" href={linkedInIcon} />
            </div>
          </div>
        </div>
      }
      children2={
        <div className={styles.mobile_wrap}>
          <Link className={styles.nil} to={'/'}><img src={arrowLeftIcon} /></Link>
          <img src={starIcon} className={styles.star1} alt="regis" />
          <img src={starIcon} className={styles.star2} alt="regis" />
          <Overlay className={styles.overlay_1} />
          <Form
            className={`flex f-width align-y f-column gap ${styles.form}`}
            onSubmit={handleSubmit}
            method="post"
          >
            <Input type="text" className={styles.nil} placeholder="Teams Name" />
            <Input
              onChange={(e) => handleChange(e)}
              value={data.email}
              id="email"
              type="email"
              required
              name="email"
              placeholder="email"
            />
            <Input
              onChange={(e) => handleChange(e)}
              value={data.first_name}
              id="first_name"
              type="text"
              name="first_name"
              required
              placeholder="first name"
            />
            <textarea
              onChange={(e) => handleChange(e)}
              value={data.message}
              id="message"
              required
              maxLength="500"
              name="message"
              placeholder="message"
            />
            <Button>submit</Button>
            <span className={styles.msg}>{success}</span>
          </Form>
          <img src={starIcon} className={styles.star3} alt="regis" />
          <img src={starIcon} className={styles.star4} alt="regis" />
          <div className={styles.nil}>
            <p>share on</p>
            <div className={`flex f-width align-x gap`}>
              <Svg width="2rem" href={igIcon} />
              <Svg width="2rem" href={xIcon} />
              <Svg width="2rem" href={fbIcon} />
              <Svg width="2rem" href={linkedInIcon} />
            </div>
          </div>
        </div>
      }
    />
  );
}
