import {features} from "../constants";
import styles, {layout} from "../styles";
import Button from "./Button";

const FeatureCard = ({icon, title, content, index}) => (
   <div className={`flex flex-row gap-5 p-6 rounded-[20px]  
   ${index !== features.length - 1 ? "mb-6" : "mb-9"} feature-card`}>
      <div className={`w-[60px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} al t="icon" className="w-[50] h-[50%] 
        object-contain"/>
      </div>
      
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-simibold text-white 
        text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite 
        text-[16px] leading-[24px] mb-1">{content}</p>
      </div>
   </div>
)

const Business = () => {
  
  return (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the business, we’ll handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[478px] mt-5`}>With the right credit card, 
            you can improve your financial life by building credit, earning 
            rewards and saving money. But with hundreds of credit cards on the market.</p>
          
          <Button styles="mt-10 rounded-[10px]"></Button>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} {...feature} index={index} />

            ))}
        </div>
          
    </section>
  )
}

export default Business;
