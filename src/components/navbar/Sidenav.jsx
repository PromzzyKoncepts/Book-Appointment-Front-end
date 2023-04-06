import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import navData from './navData';

import styles from './sidenav.module.css';

export default function Sidenav() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button type="button" className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      {navData.map((item) => (
        <NavLink key={item.id} className={styles.sideitem} to={item.link}>
          {item.icon}
          <span className={styles.linkText}>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
}
