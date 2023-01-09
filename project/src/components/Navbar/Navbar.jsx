// import { Drawer } from '@chakra-ui/react'
import React from "react";
import Drawerdata from "../Drawer/Drawer";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="drawer">
        <Drawerdata />
      </div> */}
      <div className="leftnav">
        <h3>Title</h3>
      </div>
      <div className="rightnavbar">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Blog</h3>
        <h3>Contact</h3>
        <button className="btn">Button</button>
      </div>
    </div>
  );
}

export default Navbar;
