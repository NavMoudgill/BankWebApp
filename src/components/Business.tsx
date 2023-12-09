import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface FeatureCardProps {
  icon: string;
  index: number;
  title: string;
  content: string;
}
const FeatureCard = ({ icon, index, title, content }: FeatureCardProps) => {
  return (
    <div
      className={` flex p-6 rounded-xl  feature-card ${
        index !== features.length - 1 ? "mb-6 " : "mb-0"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <LazyLoadImage
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-col flex-1 ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="hidden sm:block" /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          harum suscipit esse! Aliquam ea dolore, asperiores ducimus autem
          voluptatibus magni veniam nesciunt numquam, possimus odit fugit
          tempora nulla. Soluta, quaerat.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard index={index} key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
