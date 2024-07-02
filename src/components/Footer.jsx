import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { footerLinks } from "../constants";
import styles from "../styles";


const Footer = () => {
  return <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
    <div className="flex-1 flex md:flex-col flex-row justify-start w-full">
        <div className="flex-1 flex-col flex justify-start">
            <img src={logo} alt="" className="w-[266px] h-[72px] object-contain"/>
        </div>

        <div>
          <h1 className={`${styles.paragraph} mt-4`}>
          A new way to make the payments <br/> easy, reliable and secure.
          </h1>
        </div>
    </div>

    <div className="flex md:flex-row flex-col justify-start">

    </div>

  </div>;
};

export default Footer;
