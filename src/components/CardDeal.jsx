import {card} from "../assets";
import styles, {layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (

  <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2}`}>
        Find a better card deal<br className="sm:block hidden"/> in few easy steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mt-5 max-w-[470px] ">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles="mt-10 rounded-[10px]"></Button>
    </div>

    <div className="flex-1 flex justify-end">
      <img src={card} alt="" className="w-[100%] h-[100%] relative"/>
    </div>
  </section>
)

export default CardDeal;
