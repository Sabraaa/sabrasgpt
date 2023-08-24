import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3line, RiClodeLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
          <div className="gpt__navbar-links_container">
            <p>
              <a href="#home"> Home </a>
            </p>
            <p>
              <a href="#wgpt"> What is GPT3</a>
            </p>
            <p>
              <a href="#possibility"> Open AI </a>
            </p>
            <p>
              <a href="#fetures"> Case Studies</a>
            </p>
            <p>
              <a href="#blog"> Library</a>
            </p>
          </div>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
      {toggleMenu ? <RiClodeLin/> onClick={}
      :
      }
      </div>
    </div>
  );
};

export default Navbar;
