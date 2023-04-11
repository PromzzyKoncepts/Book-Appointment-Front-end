/* eslint-disable import/no-extraneous-dependencies */

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Proptypes from 'prop-types';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import navData from './navData';
import Regal from '../../assets/regal.png';
import styles from './sidenav.module.css';

export default function Sidenav({ isLoggedIn, setIsLoggedIn }) {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  
  const currentUserData = JSON.parse(localStorage.getItem('user'));
  const currentUser = currentUserData?.user;
  console.log(currentUser, "this is the current user")
  const displayCurrUser = {
    id: 0,
    icon: <AccountCircleIcon />,
    text: currentUser.name,
    link: '/',
    isProtected: true,
  }

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
    id: 6,
    icon: <LogoutIcon />,
    text: isLoggedIn ? 'Logout' : 'Login',
    link: isLoggedIn ? '/' : '/login',
    onClick: isLoggedIn ? () => logout() : () => navigateToLogin(),
    isProtected: false,
  };

  const tabsToDisplay = [displayCurrUser, ...navData, loginTab].filter((tab) => {
    if (isLoggedIn) return tab;
    return !tab.isProtected;
  });

  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      <img src={Regal} alt="logo" className={open ? styles.logo : styles.logoClosed} />
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
