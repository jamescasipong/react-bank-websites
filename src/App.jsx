import styles from "./styles";

import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>

        </div>
      </div>

      <section className={`bg-footer flex justify-center items-center sm:px-16 px-6 sm:py-16 py-6 
       flex-col mt-10`}>
      <div className={`${styles.boxWidth}`}>

          <Footer/>
        </div>
      </section>
    </div>
  );
};

export default App;
