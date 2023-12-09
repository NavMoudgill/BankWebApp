import React from "react";
import styles, { layout } from "../style";
import { Button, FeedbackCard } from ".";
import { feedback } from "../constants";
const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] -right-[50%] blue__gradient border border-white" />
    <div className="w-full flex  justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What people are,
        <br className="hidden sm:block" /> saying about us
      </h2>
      <div className=" w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim
          sapiente laudantium dolorem
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
