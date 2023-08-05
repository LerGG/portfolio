// import Swiper core and required modules

import React from "react";

import { StyledFlexBox } from "../Basic/StyledFlexBox";
import { projectSwipes } from "../../constants";
import { ProjectSlide } from "./ProjectSlide";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, A11y, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

export default function ProjectSwiper() {
  return (
    <StyledFlexBox style={{ height: "100%" }}>
      <Swiper
        className="Project Galery"
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{ clickable: true }}
        speed={5000}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
      >
        {projectSwipes.map((slide, index) => (
          <SwiperSlide key={slide.tag + index}>
            <ProjectSlide key={index} slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledFlexBox>
  );
}
