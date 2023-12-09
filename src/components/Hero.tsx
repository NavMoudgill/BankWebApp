import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY} `}
    >
      <div
        className={`flex-1 flex-col px-6 sm:px-16 xl:px-0 ${styles.flexStart} `}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-[4px] bg-discount-gradient rounded-[10px] mb-2  `}
        >
          <LazyLoadImage
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR&nbsp;
            <span className="text-white">1 MONTH</span>&nbsp;ACCOUNT
          </p>
        </div>
        <div className=" flex flex-row justify-between items-center  w-full">
          <h1 className="text-white font-poppins flex-1 font-semibold text-[52px] ss:text-[72px] ss:leading-[100px] leading-[72px] ">
            The NEXT <br className="hidden sm:block" />
            <span className="text-gradient">GENERATION</span>
          </h1>
          <div className="hidden ss:flex mr-0 md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className=" w-full text-white font-poppins flex-1 font-semibold text-[52px] ss:text-[68px] ss:leading-[100px] leading-[72px] ">
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ocaecati
          aut nisi ipsam aperiam ea reprehenderit est, rem laudantium tempora
          doloremque architecto maiores
        </p>
      </div>
      <div className={`flex-1  ${styles.flexCenter} my-10 md:my-0 relative`}>
        <LazyLoadImage
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%]  z-[5]"
        />
        <div className=" border border-red-900 absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className=" border border-red-900 absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient" />
        <div className=" border border-red-900 absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
      </div>
      <div className={` ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
