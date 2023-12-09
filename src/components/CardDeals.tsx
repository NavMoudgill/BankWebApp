import React from "react";
import { Button } from ".";
import styles, { layout } from "../style";
import { card } from "../assets";

import { LazyLoadImage } from "react-lazy-load-image-component";
const CardDeals = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="hidden sm:block" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt harum
        suscipit esse! Aliquam ea dolore, asperiores ducimus autem voluptatibus
        magni veniam nesciunt numquam, possimus odit fugit tempora nulla.
        Soluta, quaerat.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={` ${layout.sectionImg} `}>
      <LazyLoadImage
        src={card}
        alt="icon"
        className="w-[100%] h-[100%] object-contain"
      />
    </div>
  </section>
);

export default CardDeals;
