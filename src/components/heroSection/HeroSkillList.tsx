import { skills } from "../../constants";
import { gotham_light } from "../../fonts/gotham_light";
import { theme } from "../../theme/theme";
import { StyledCharSpacing } from "../Basic/StyledCharSpacing";
import { StyledText } from "../Basic/StyledText";
import React from "react";

export const SkillList = () => {
  // removes last delimiter
  return (
    <>
      {skills.map((skill, index) => {
        return (
          <StyledText
            key={skill}
            style={gotham_light.style}
            size="18px"
            color={theme.colors.secondary}
          >
            {skill}
            {!(skills.length - 1 === index) && (
              <StyledCharSpacing>/</StyledCharSpacing>
            )}
          </StyledText>
        );
      })}
    </>
  );
};
