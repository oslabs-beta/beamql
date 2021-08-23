import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    <div>
      <div id="NavBar">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Sandbox
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Docs
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Github
        </Button>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Squad
        </Button>
      </div>
<Menu
  id="simple-menu"
  // anchorEl={anchorEl}
  // keepMounted
  // open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>My account</MenuItem>
  <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>
    </div>

  )
};

export default Navbar;