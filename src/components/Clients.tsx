import React from "react";
import styles from "../style";
import { clients } from "../constants";

import { LazyLoadImage } from "react-lazy-load-image-component";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter}  my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              className={`${styles.flexCenter} min-w-[120px] sm:min-w-[192px] flex-1 `}
              key={client.id}
            >
              <LazyLoadImage
                src={client.logo}
                alt="client"
                className="sm:w-[190px] w-[100px] object-contain logo"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
