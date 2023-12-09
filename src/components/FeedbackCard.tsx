import { quotes } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface FeedbackProps {
  title: string;
  img: string;
  content: string;
  name: string;
}
const FeedbackCard = ({ title, img, content, name }: FeedbackProps) => {
  return (
    <div className="w-full flex justify-between items-center flex-col px-10 py-12 sm:mr-5 mr-0 max-w-[370px]">
      <LazyLoadImage
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p
        className={`font-poppins font-normal text-[18px] leading-[32px] my-10 text-white`}
      >
        {content}
      </p>
      <div className="flex ">
        <LazyLoadImage
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col justify-center ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
