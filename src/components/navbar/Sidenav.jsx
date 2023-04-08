import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Proptypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import navData from './navData';

import styles from './sidenav.module.css';

export default function Sidenav({ isLoggedIn, setIsLoggedIn }) {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  const navigateToLogin = () => {
    const navigate = useNavigate();
    navigate('/login');
  };

  const loginTab = {
    id: 5,
    icon: <SettingsIcon />,
    text: isLoggedIn ? 'Logout' : 'Login',
    link: isLoggedIn ? '/' : '/login',
    onClick: isLoggedIn ? () => logout() : () => navigateToLogin(),
    isProtected: false,
  };

  const tabsToDisplay = [...navData, loginTab].filter((tab) => {
    if (isLoggedIn) return tab;
    return !tab.isProtected;
  });

  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <button type="button" className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      {tabsToDisplay.map((item) => (
        <NavLink key={item.id} className={styles.sideitem} to={item.link} onClick={item.onClick}>
          {item.icon}
          <span className={styles.linkText}>{item.text}</span>
        </NavLink>
      ))}
    </div>
  );
}

Sidenav.propTypes = {
  isLoggedIn: Proptypes.bool.isRequired,
  setIsLoggedIn: Proptypes.func.isRequired,
};
