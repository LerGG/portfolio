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
          <StyledText style={gotham_light.style} color="#fff">
            {slide.location}
          </StyledText>
        </StyledSlideLocation>
        <StyledFlexBox>
          <Image
            height={70}
            width={250}
            src={slide.imgUrl}
            alt={"logo"}
            style={{ objectFit: "contain" }}
          />
        </StyledFlexBox>
        <StyledFlexBox>{slide.text}</StyledFlexBox>
      </StyledProjectSlideWrapper>
    </StyledProjectSlide>
  );
};
