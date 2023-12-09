import React from "react";
import styles, { layout } from "../style";
import { Button } from ".";

const CTA = () => {
  return (
    <section
      className={` ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className={` flex flex-col flex-1`}>
        <h2 className={styles.heading2}>Let's try our service now</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          harum suscipit esse! Aliquam ea dolore, asperiores ducimus autem
          voluptatibus magni veniam nesciunt numquam, possimus odit fugit
          tempora nulla. Soluta, quaerat.
        </p>
      </div>
      <div className={` ${styles.flexCenter} sm:ml-10 ml-0 mt-0 sm:mt-10`}>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default CTA;
