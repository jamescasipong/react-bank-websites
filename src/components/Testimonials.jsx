import React from "react";
import styles from "../styles";
import {feedback} from "../constants";
import {quotes} from "../assets";


const Testimonials = () => (

  <section id="clients" className={`${styles.paddingY} flex flex-col justify-center items-center relative`}>
    
    <div className={`w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]`}>
         <h1 className={styles.heading2}>What people are <b className="md:block hidden"/>saying about us</h1>


      <div className="w-full md:mt-0 mt-6">
        <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] p-[30px]">
        Everything you need to accept card payments <br className="md:block  hidden"/> and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className={`md:flex-row flex-col flex justify-center`}>
      {feedback.map((fback) => 
      <div key={fback.id} className="flex-1 flex flex-col p-[60px]  gap-7 feature-card rounded-[10px] sm:mr-10 m-0">
        <img src={quotes} alt="" className="w-[42px] h-[27px] "/>
        <p className="font-poppins text-white flex-1 justify-center flex max-w-[470px] mt-5">
          {fback.content}
        </p>

        <div className="flex flex-row gap-5">
          <img src={fback.img} alt={fback.name} className={`width-[48px] h-[48px] object-contain`}/>
          <div className="flex flex-col">
              <h2 className="font-poppins text-white">
                  {fback.name}
              </h2>
              <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mb-1">
                {fback.title}
              </p>
          </div>
        </div>

      </div>)}
      </div>
  </section>
)

export default Testimonials;
