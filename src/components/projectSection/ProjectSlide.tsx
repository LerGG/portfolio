import {
  StyledProjectSlide,
  StyledProjectSlideWrapper,
  StyledSlideLocation,
  StyledSlideTag,
} from "./projectSection.styles";
import { ProjectSwipe } from "../../interfaces/interfaces";
import { StyledText } from "../Basic/StyledText";
import { gotham_light } from "../../fonts/gotham_light";
import { StyledFlexBox } from "../Basic/StyledFlexBox";
import Image from "next/image";
import { gotham_medium } from "../../fonts/gotham_medium";
import { StyledWhiteSquare } from "../Basic/StyledWhiteSquare";
import React from "react";

export interface ProjectSlideProps {
  slide: ProjectSwipe;
}

export const ProjectSlide = ({ slide }: ProjectSlideProps) => {
  return (
    <StyledProjectSlide>
      <StyledProjectSlideWrapper>
        <StyledSlideTag>
          <StyledWhiteSquare>
            <StyledText size="14px" style={gotham_medium.style} color="#000">
              {slide.tag}
            </StyledText>
          </StyledWhiteSquare>
        </StyledSlideTag>
        <StyledSlideLocation>
          <StyledText size="16px" style={gotham_light.style} color={"#fff"}>
            {slide.location}
          </StyledText>
        </StyledSlideLocation>
        <StyledFlexBox style={{ justifyContent: "center" }}>
          <Image
            height={80}
            width={250}
            src={slide.imgUrl}
            alt={"logo"}
            style={{ objectFit: "contain" }}
          />
        </StyledFlexBox>
        <StyledFlexBox style={{ height: "50%", paddingTop: "2rem" }}>
          {slide.text}
        </StyledFlexBox>
      </StyledProjectSlideWrapper>
    </StyledProjectSlide>
  );
};
