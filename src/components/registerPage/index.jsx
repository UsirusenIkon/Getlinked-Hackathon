import { Link } from 'react-router-dom';
import { arrowLeftIcon, regisIcon, starIcon } from '../../assets';
import Button from '../utility/Button';
import Form from '../utility/form';
import Input from '../utility/form/input';
import Wrapper from '../utility/wrapper';
import styles from './index.module.css';
import { useState } from 'react';
import Modal from './modal';
import Overlay from '../utility/overlay';

export default function RegisterPage() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    email: '',
    team_name: '',
    phone_number: '',
    project_topic: '',
    group_size: '',
    category: '',
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    const newData = { ...data };

    if (e.target.name === 'group_size' || e.target.name === 'category') {
      // Use parseInt() to convert the input value to an integer
      newData[e.target.name] = parseInt(e.target.value, 10);
    } else {
      // For other fields, simply set the value
      newData[e.target.name] = e.target.value;
    }

    setData(newData);
  };

  const handleChecked = (e) => {
    const checkedStat = { ...checked };
    checkedStat[[e.target.name]] = e.target.checked;
    setChecked(checkedStat);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ ...data, ...checked }));

    try {
      const response = await fetch(
        'https://backend.getlinked.ai/hackathon/registration',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({ ...data, ...checked }),
        },
      );

      //  do something if it successful
      if (response.status === 201) {
        // setSuccess('Sent ✅');
        setSuccess(true);
      } else{
        throw new Error(response.json())
      }
    } catch (error) {
      console.log('hello');
    }
  };

  return (
    <Wrapper
      wrapClass={styles.regisWrap}
      className={styles.register}
      children1={
        <>
          <img src={starIcon} className={styles.star1} alt="regis" />
          <img src={starIcon} className={styles.star2} alt="regis" />
          <Link className={styles.nil} to={'/'}></Link>
          <Overlay className={styles.overlay} />
          <img src={regisIcon} className={styles.img} alt="regis" />
          <Link className={styles.nil} to={'/'}>
            <img src={arrowLeftIcon} />
          </Link>
        </>
      }
      children2={
        <Form onSubmit={handleSubmit} method="post">
          <img src={starIcon} className={styles.star3} alt="regis" />
          <div className={`grid gap ${styles.inputsWrap}`}>
            <Input
              label={'Team’s Name'}
              onChange={(e) => handleChange(e)}
              value={data.teams_name}
              id="team_name"
              type="text"
              name="team_name"
              required
              placeholder="Enter the name of your group"
            />
            <Input
              label={'Phone'}
              onChange={(e) => handleChange(e)}
              value={data.phone_number}
              id="phone_number"
              type="number"
              name="phone_number"
              required
              placeholder="Enter your phone number"
            />
            <Input
              label={'Email'}
              onChange={(e) => handleChange(e)}
              value={data.email}
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
            <Input
              label={'Project Topic'}
              onChange={(e) => handleChange(e)}
              value={data.project_topic}
              id="project_topic"
              type="text"
              name="project_topic"
              required
              placeholder="What is your group project topic"
            />
          </div>
          <div className={`flex f-width gap ${styles.last_input}`}>
            <div className={`flex f-width f-column gap ${styles.select}`}>
              <label htmlFor="select">Category</label>
              <select
                id="category"
                name="category"
                onChange={(e) => handleChange(e)}
                value={data.category}
                className={`flex b-radius f-width`}
              >
                <option value="">Select your Category</option>
                <option value="1">MOBILE</option>
                <option value="2">WEB</option>
                <option value="3">UI/UX</option>
              </select>
            </div>
            <Input
              label={'Group Size'}
              onChange={(e) => handleChange(e)}
              value={data.group_size}
              id="group_size"
              type="number"
              name="group_size"
              required
              placeholder="Select"
            />
          </div>
          <i className={styles.i}>
            Please review your registration details before submitting
          </i>
          <div className="flex gap">
            <Input
              type="checkbox"
              name="privacy_poclicy_accepted"
              onChange={(e) => {
                handleChecked(e);
              }}
              value={data.privacy_poclicy_accepted}
              className={styles.box}
            />
            <span>
              I agreed with the event terms and conditions and privacy policy
            </span>
          </div>
          <Modal isVisible={success} onClose={()=>setSuccess(false)} />
          <Button className={styles.btn}>submit</Button>
          <Overlay className={styles.overlay_1} />
          <img src={starIcon} className={styles.star4} alt="regis" />
          <img src={starIcon} className={styles.star5} alt="regis" />
        </Form>
      }
    />
  );
}
