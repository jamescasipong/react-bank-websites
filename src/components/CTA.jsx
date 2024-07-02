import React from "react";
import styles, {layout} from "../styles";
import Button from "./Button";

const CTA = () => (
  
  <section className={`my-6 flex sm:flex-row flex-col justify-center items-center relative w-full sm:pt-[40px] pt-[20px] sm:pl-[60px] pl-[24px] sm:pb-[40px] pb-[20px] sm:pr-[60px] pr-[24px] bg-black-gradient-2 rounded-xl`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} sm:text-left text-center`}>
      Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} mt-5 sm:max-w-auto max-w-[450px] sm:text-left text-center`}>
      Everything you need to accept card payments<br className="sm:block hidden"/> and grow your business anywhere on the planet.
      </p>
    </div>

    <div className={`flex sm:justify-end justify-center items-center sm:mt-0 mt-10`}>
      <Button styles="rounded-md"></Button>
    </div>
  </section>
  
)

export default CTA;
