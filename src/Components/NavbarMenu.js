import React, { useEffect, useLayoutEffect } from "react";
import "../Styles/NavbarMenu.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonEffect from "../Util/ButtonEffect";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMenu = () => {
  useLayoutEffect(() => {
    const getNav = document.querySelector(".navbarmenu_container");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        getNav.classList.add("navbarmenu_container_scroll");
      } else {
        getNav.classList.remove("navbarmenu_container_scroll");
      }
      console.log(getNav);
    });
    console.log(getNav);
  }, []);
  const openMenuHandler = () => {
    const getMenu = document.querySelector(".navbarmenu_menu_container");
    getMenu.classList.remove("navbarmenu_menu_container_close");
    getMenu.classList.add("navbarmenu_menu_container_open");
  };

  const closeMenuHandler = () => {
    const getMenu = document.querySelector(".navbarmenu_menu_container");
    getMenu.classList.remove("navbarmenu_menu_container_open");
    getMenu.classList.add("navbarmenu_menu_container_close");
  };

  return (
    <div className="navbarmenu_container">
      <div className="navbarmenu_inner">
        <div className="navbarmenu_logo">Logo</div>
        <div className="navbarmenu_hamburger_btn_container">
          <button
            className="navbarmenu_hamburger_btn"
            onClick={openMenuHandler}
          >
            <GiHamburgerMenu className="btn_purple" />
          </button>
        </div>
      </div>
      <div className="navbarmenu_menu_container">
        <div className="navbarmenu_menu_btn">
          <button
            className="navbarmenu_hamburger_btn"
            onClick={closeMenuHandler}
          >
            <AiOutlineClose className="btn_purple" />
          </button>
        </div>
        <div className="navbarmenu_menu_items_container">
          <div className="navbarmenu_menu_item">
            <h4>PRODUCTS</h4>
            <a href="#">Design</a>
            <a href="#">Manage</a>
            <a href="#">Content</a>
            <a href="#">Easily</a>
          </div>
          <div className="navbarmenu_menu_item">
            <h4>PRODUCTS</h4>
            <a href="#">Design</a>
            <a href="#">Manage</a>
            <a href="#">Content</a>
            <a href="#">Easily</a>
          </div>
          <div className="navbarmenu_menu_item">
            <h4>PRODUCTS</h4>
            <a href="#">Design</a>
            <a href="#">Manage</a>
            <a href="#">Content</a>
            <a href="#">Easily</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
