import { Spacer } from "../Basic/Spacer";
import { StyledText } from "../Basic/StyledText";
import { StyledAboutSectionRight } from "./aboutSection.styles";

export const AboutSectionRight = () => {
  return (
    <StyledAboutSectionRight>
      <StyledText size="18px" textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </StyledText>
      <Spacer $space="2"></Spacer>
      <StyledText size="18px" textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </StyledText>
      <Spacer $space="2"></Spacer>
      <StyledText size="18px" textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </StyledText>
    </StyledAboutSectionRight>
  );
};
