import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import petExampleImage from "@/public/images/pet-example.png";
import styles from "./styles.module.scss";

export const Carousel = () => {
  const settings: Settings = {
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <section className={styles.container}>
      <Slider {...settings}>
        {Array.from({ length: 100 }).map((_, index) => (
          <button type="button" key={String(index)}>
            <Image src={petExampleImage} width={200} height={240} alt="pet" />
          </button>
        ))}
      </Slider>
    </section>
  );
};
