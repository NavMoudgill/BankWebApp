import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter} mb-6 sm:mb-20 flex-wrap`}>
    {stats.map((stat) => (
      <div
        className={`flex justify-start items-center m-3 sm:mb-20 flex-1`}
        key={stat.id}
      >
        <h4 className="font-poppinsfont-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="text-gradient font-normal xs:text-[20px] text-[15px]  xs:leading-[26px] leading-[21px] ml-3 uppercase">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
