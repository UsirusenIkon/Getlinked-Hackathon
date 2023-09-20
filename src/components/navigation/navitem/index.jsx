/* eslint-disable react/prop-types */
import styles from './navitem.module.css';
import { Link } from 'react-router-dom';

const NavItem = ({ item, onClick, className, drop }) => {
  return (
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
  );
};
// ${  pathname.includes(item.path) ? styles.active : ''}
export default NavItem;
