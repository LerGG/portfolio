import { NextFont } from "next/dist/compiled/@next/font";

import { Spacer } from "./Basic/Spacer";

import { NavBar } from "./navBar/NavBar";

import { Footer } from "./footer/Footer";
import { PageContainer } from "./Basic/layout/PageContainer";
import { ContentWrapper } from "./Basic/layout/ContentWrapper";
import { StyledFlexBox } from "./Basic/StyledFlexBox";

export interface LayoutProps {
  children: React.ReactNode;
  customfont?: NextFont;
}

export default function Layout({ children, customfont }: LayoutProps) {
  return (
    <StyledFlexBox>
      <NavBar />
      <Spacer />
      <PageContainer>
        <ContentWrapper>
          <main className={customfont?.className}>{children}</main>
        </ContentWrapper>
      </PageContainer>
      <Spacer />
      <Footer />
    </StyledFlexBox>
  );
}
