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
  // eslint-disable-next-line no-unused-vars
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const colorSwap = () => {
      window.scrollY >= 10 ? setNavBar(true) : setNavBar(false);
    };

    const navStatus = () => {
      colorSwap();
    };

    window.addEventListener('scroll', navStatus);
    return () => {
      window.removeEventListener('scroll', navStatus);
    };
  }, [scroll]);

  const onClickHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={`f-width s-btw ${styles.nav} 
      ${navBar ? `bg-tertiary` : ''}
      ${location.pathname !== '/' ? styles.hide : styles.see}`}
    >
      <Container
        element={'div'}
        className={`flex f-width s-btw ${styles.nav} ${navBar ? `bg-ter` : ''}`}
      >
        <div
          className={`flex s-btw align-y f-width `}
        >
          <Link onClick={() => setDropDown(-1)} to={'/'}>
            <b>
              get<span className={styles.logo}>linked</span>
            </b>
          </Link>
          <div className={open ? styles.border : styles.border_1}>
            <button
              type="button"
              title="menu"
              onClick={onClickHandler}
              className={`flex f-column ${styles.hamburger_menu}`}
            >
              <span
                className={`${styles.line} ${open ? styles.tilt : styles.tilt1} 
            ${open ? styles.hue_1 : styles.hue_2}`}
              ></span>
              <span
                className={`${styles.line} ${open ? styles.hide : styles.see} 
            ${open ? styles.hue_1 : styles.hue_2}`}
              ></span>
              <span
                className={`${styles.line} ${
                  open ? styles.rtilt : styles.rtilt1
                } 
            ${open ? styles.hue_1 : styles.hue_2}`}
              ></span>
            </button>
          </div>
        </div>
        <ul
          className={`flex inter ${styles.nav_content}
          ${open ? styles.open : styles.close}
          `}
        >
          {navbarData.map((link, idx) => (
            <NavItem
              onClick={() => {
                setOpen(false);
                setDropDown((prev) => (prev === idx ? -1 : idx));
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
