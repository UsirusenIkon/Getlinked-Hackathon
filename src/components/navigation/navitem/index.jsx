/* eslint-disable react/prop-types */
import styles from './navitem.module.css';
import { Link } from 'react-router-dom';

const NavItem = ({ item, onClick, className, drop }) => {
  return (
    <>
      {item.name === 'Contact' ? (
        <li onClick={onClick} className={className}>
          <Link
            className={`flex f-column inter 
            ${drop ? styles.active : styles.exit_color}
            ${styles.nav_item}`}
            to={item.path}
          >
            {item.name}
          </Link>
        </li>
      ) : location.pathname === '/contact' ||
        location.pathname === '/register' ? (
        <li onClick={onClick} className={className}>
          <Link
            className={`flex f-column inter 
          ${drop ? styles.active : styles.exit_color}
          ${styles.nav_item}`}
            to={'/'}
          >
            {item.name}
          </Link>
        </li>
      ) : (
        <li onClick={onClick} className={className}>
          <a
            className={`flex f-column inter 
          ${drop ? styles.active : styles.exit_color}
          ${styles.nav_item}`}
            href={item.path}
          >
            {item.name}
          </a>
        </li>
      )}
    </>
  );
};
export default NavItem;
