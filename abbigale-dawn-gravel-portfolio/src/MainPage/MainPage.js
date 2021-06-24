import { MainNavHeader } from "./MainNavHeader/MainNavHeader";
import { Profile } from "./Profile/Profile";
import { Work } from "./Work/Work";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

import "./MainPage.css";
import React from "react";

export const MainPage = () => {
  const handleNavClick = (position) => {
    console.log(position);
    const scrollTo = document.querySelector(`.${position}`);

    if (!scrollTo) return;
    // const distance = (position === 'skills' ||
    //                   position === 'work' ||
    //                   position === 'contact')
    //                     ? 100 : -100
    window.scroll({ top: scrollTo.offsetTop, left: 0, behavior: "smooth" });
  };

  return (
    <div className="full-page-container">
      <MainNavHeader handleNavClick={handleNavClick}></MainNavHeader>
      <div className="main-section-container">
        <div className="profile">
          <Profile handleNavClick={handleNavClick}></Profile>
        </div>
        <div className="work">
          <Work handleNavClick={handleNavClick}></Work>
        </div>
      </div>
      {/* <div className='about'><About></About></div>
      <div className='skills'><Skills></Skills></div>
      <div className='contact'><Contact></Contact></div>
      <Footer></Footer> */}
    </div>
  );
};
