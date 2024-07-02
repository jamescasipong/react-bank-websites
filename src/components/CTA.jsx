import React from "react";
import styles, {layout} from "../styles";
import Button from "./Button";

const CTA = () => (
  
  <section className={`my-6 flex justify-center items-center relative w-full pt-[40px] pl-[60px] pb-[40px] pr-[60px] bg-black-gradient-2 rounded-xl`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
      Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
      Everything you need to accept card payments<br /> and grow your business anywhere on the planet.
      </p>
    </div>

    <div className={`flex justify-end items-center`}>
      <Button styles="rounded-md"></Button>
    </div>
  </section>
  
)

export default CTA;
