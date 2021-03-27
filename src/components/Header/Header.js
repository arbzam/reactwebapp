import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section className="main-header" style={{backgroundImage: 'url(./images/slider-image.jpg)'}}>
    
        <div className="container">
          <HeaderText />
        </div>
      </section>
    </>
  );
};
export default Header;
