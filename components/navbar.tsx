import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from '../styles/Home.module.css'
import Image from 'next/image'

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  /*
  function closeNav() {
    document.getElementById("main-menu").style.display = "none";
  }

  function openNav() {
    document.getElementById("main-menu").style.display = "block";
  }*/

  /*
  TODO I'm not sure why when closing the menu everything reload...
  */
  const handleClick = () => {
    console.log('fuck');
  }

  const handleClose = () => {
    console.log('unfuck');
  }
  
  // const anchorEl = document.createElement('div');

  return (
      <div className={styles.navbar}>
        <Image className={styles.navbarLeft} src="/logo.png" alt="logo" width="100" height="64" />
        <div className={styles.navbarRight}>
        <Button style={{color: 'white'}} aria-controls="simple-menu" onClick={handleClick}>
          Sandbox
        </Button>
        <Button style={{color: 'white'}} aria-controls="simple-menu" onClick={handleClick}>
          Docs
        </Button>
        <Button style={{color: 'white'}} aria-controls="simple-menu" onClick={handleClick}>
          Github
        </Button>
        <Button style={{color: 'white'}} aria-controls="simple-menu" onClick={handleClick}>
          Squad
        </Button>
        </div>
      </div>
  )
};

export default Navbar;