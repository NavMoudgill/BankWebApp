import React from "react";
import { bill, apple, google } from "../assets";
import styles, { layout } from "../style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from ".";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse} relative`}>
      <div className={layout.sectionImgReverse}>
        <LazyLoadImage
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easy control of your <br className="hidden sm:block" /> billing and
          invoicing,
          <br className="hidden sm:block" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          harum suscipit esse! Aliquam ea dolore, asperiores ducimus autem
          voluptatibus magni veniam nesciunt numquam, possimus odit fugit
          tempora nulla. Soluta, quaerat.
        </p>
        <div className="flex flex-wrap sm:mt-10 mt-6">
          <LazyLoadImage
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain"
          />
          <LazyLoadImage
            src={google}
            alt="google_play"
            className="w-[128px] h-[42px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
