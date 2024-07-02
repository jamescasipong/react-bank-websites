import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { footerLinks } from "../constants";
import styles from "../styles";


const Footer = () => {
  return (
  <div>
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-1 flex flex-col md:mb-5 mb-0 justify-start mr-10">
          <div className="flex-1 flex-col flex justify-start">
              <img src={logo} alt="" className="w-[266px] h-[72px] object-contain"/>
          </div>

          <div>
            <h1 className={`${styles.paragraph} mt-4`}>
            A new way to make the payments <br/> easy, reliable and secure.
            </h1>
          </div>
      </div>

      <div className="flex flex-row flex-wrap justify-between flex-[1.5] w-full"> 
            {footerLinks.map((footer) => 
            (
              <div className="flex flex-col my-4 min-w-[150px] ss:my-0">
                <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px] mb-2 ">{footer.title}</h4>

                <ul className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] `}>
                  {footer.links.map((link) => (
                    <li className={`mt-2`}><a href={link.link}>{link.name}</a></li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
    
    <div>

    </div>
  </div>
)};

export default Footer;
