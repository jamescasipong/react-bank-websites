import React from "react";
import {airbnb, binance, coinbase, dropbox} from "../assets/index";



const Clients = () => (

  <section id="cta" className={`flex justify-center items-center`}>
    <div className="flex flex-wrap w-full sm:justify-between justify-center items-center p-[35px] sm:gap-4 gap-10 relative">
      <img src={airbnb} alt="airbnb" className="w-[192px] h-[60px] object-contain "/>
      <img src={binance} alt="airbnb" className="w-[192px] h-[60px] object-contain "/>
      <img src={coinbase} alt="airbnb" className="w-[192px] h-[60px] object-contain "/>
      <img src={dropbox} alt="airbnb" className=" w-[192px] h-[60px] object-contain "/>
    </div>
  </section>
)

export default Clients;
