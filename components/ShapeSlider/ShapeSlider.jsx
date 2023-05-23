import someOther from "assets/images/factory/red.gif";
import { ReactComponent as ArrowIcon } from "assets/images/icons/slider-arrow.svg";
import nikeAir from "assets/images/shape.gif";
import { motion } from "framer-motion";
import React, { memo, useRef } from "react";
import { Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./ShapeSlider.module.scss";

const slides = [
  { id: 1, image: nikeAir, type: "nike air" },
  { id: 2, image: someOther, type: "nike air2" },
];

const ShapeSlider = memo(() => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const Control = () => (
    <div className={s.navigation}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`${s.arrow} ${s.arrowPrev}`}
        ref={navigationPrevRef}
      >
        <ArrowIcon />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className={s.arrow}
        ref={navigationNextRef}
      >
        <ArrowIcon />
      </motion.button>
    </div>
  );

  return (
    <div className={s.slider}>
      <Swiper
        rewind={true}
        centeredSlides={true}
        slidesPerView={1}
        allowTouchMove={false}
        spaceBetween={40}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation]}
        className={s.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={s.slide}>
            <img src={slide.image} alt={slide.type} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Control />
    </div>
  );
});

export default ShapeSlider;
