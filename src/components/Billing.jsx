import React from "react";
import {bill, google, apple} from "../assets/index";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    
    <section id="product" className={`${layout.sectionReverse} `}>
      <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>

          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        

        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>

      <div className="flex flex-1 flex-col justify-center p-10">
        <div className="flex flex-col">
        <h2 className={`${styles.heading2}`}>Easily control your<br className="sm:block hidden"/> billing & invoicing.</h2>
        <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mt-5 max-w-[470px]">Elit enim sed massa etiam. Mauris eu adipiscing ultrices 
        ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

        </div>
        <div className="flex flex-1 flex-row mt-5 gap-5">
        <img src={google} alt="bill" className="w-[128.86px] h-[42.05px] object-contain"/>
        <img src={apple} alt="bill" className="w-[128.86px] h-[42.05px] object-contain"/>
        </div>

      </div>
      </section>
  )
};

export default Billing;
