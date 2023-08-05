import { gotham_bold } from "../../fonts/gotham_bold";
import React from "react";
import { StyledHeadline2 } from "../Basic/StyledHeadline2";
import ProjectSwiper from "./ProjectSwiper";

import { ProjectSectionWrapper } from "./projectSection.styles";

export const ProjectSection = () => {
  return (
    <ProjectSectionWrapper>
      <StyledHeadline2 color={"#ffffff"} style={gotham_bold.style}>
        {"Project & work experience".toUpperCase()}
      </StyledHeadline2>
      <ProjectSwiper />
    </ProjectSectionWrapper>
  );
};
