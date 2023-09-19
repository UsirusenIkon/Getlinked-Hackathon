import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';
import Container from '../utility/Container';
import navbarData from './navbarData';
import NavItem from './navitem';
import Button from '../utility/Button';

function Navigation() {
  const [open, setOpen] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [dropDown, setDropDown] = useState(-1);
  const [goingUp, setGoingUp] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scroll < currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      if (scroll > currentScrollY && goingUp) {
        setGoingUp(false);
      }
      setScroll(currentScrollY);
    };

    const colorSwap = () => {
      window.scrollY >= 70 ? setNavBar(true) : setNavBar(false);
    };

    const navStatus = () => {
      colorSwap();
      handleScroll();
    };

    return () => {
      window.addEventListener('scroll', navStatus);
    };
  }, [goingUp, scroll]);

  const onClickHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={`f-width b-bottom s-btw ${styles.nav} ${
        navBar ? `bg-tertiary` : ''
      }
      ${goingUp ? styles.hide : styles.see}`}
    >
      <Container
        element={'div'}
        className={`flex f-width s-btw ${styles.nav} ${
          navBar ? `bg-tertiary` : ''
        }
    ${goingUp ? styles.hide : styles.see}`}
      >
        <Link onClick={() => setDropDown(-1)} to={'/'}>
          <b>
            get<span className={styles.logo}>linked</span>
          </b>
        </Link>
        <div className={open || navBar ? styles.border : styles.border_1}>
        <button
          type="button"
          title="menu"
          onClick={onClickHandler}
          className={`flex f-column ${styles.hamburger_menu}`}
        >
          <span
            className={`${styles.line} ${open ? styles.tilt : styles.tilt1} 
            ${navBar || open ? styles.hue_1 : styles.hue_2}`}
          ></span>
          <span
            className={`${styles.line} ${open ? styles.hide : styles.see} 
            ${navBar || open ? styles.hue_1 : styles.hue_2}`}
          ></span>
          <span
            className={`${styles.line} ${open ? styles.rtilt : styles.rtilt1} 
            ${navBar || open ? styles.hue_1 : styles.hue_2}`}
          ></span>
        </button>
        </div>
        <ul
          className={`flex inter ${styles.nav_content} ${
            open ? styles.open : styles.close
          }`}
        >
          {navbarData.map((link, idx) => (
            <NavItem
              onClick={() => {
                setOpen(false);
                setDropDown((prev) => (prev === idx ? -1 : idx))
              }}
              drop={dropDown === idx}
              key={link.name}
              item={link}
              navState={navBar}
            />
          ))}
          <li className={`flex ${styles.reg}`}>
            <Link to={'register'} className="inter">
              <Button
                type="submit"
                onClick={() => setOpen(false)}
                className={`inter ${styles.reg_btn}`}
              >
                Register
              </Button>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navigation;
