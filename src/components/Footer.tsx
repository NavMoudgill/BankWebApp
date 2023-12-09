import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

import { LazyLoadImage } from "react-lazy-load-image-component";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div
        className={`${styles.flexStart} ${styles.paddingY} flex-col md:flex-row mb-8 w-full`}
      >
        <div className="flex-1 flex-col flex justify-start mr-10">
          <LazyLoadImage src={logo} alt="logo" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              key={footerLink.title}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    key={link.name}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2023 HooBank. All rights reserved.
        </p>
        <div className="flex  md:mt-0 mt-6 ">
          {socialMedia.map((social, index) => (
            <div className="mr-4" key={index}>
              <LazyLoadImage
                key={social.id}
                src={social.icon}
                alt="social"
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                } `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
