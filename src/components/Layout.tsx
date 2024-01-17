import { NextFont } from "next/dist/compiled/@next/font";
import { ContentWrapper } from "./Basic/ContentWrapper";
import { PageContainer } from "./Basic/PageContainer";
import { Spacer } from "./Basic/Spacer";

import { NavBar } from "./navBar/NavBar";
import React from "react";
import { Footer } from "./footer/Footer";

export interface LayoutProps {
  children: React.ReactNode;
  customfont?: NextFont;
}

export default function Layout({ children, customfont }: LayoutProps) {
  return (
    <>
      <NavBar />
      <Spacer />
      <PageContainer>
        <ContentWrapper>
          <main className={customfont?.className}>{children}</main>
        </ContentWrapper>
      </PageContainer>
      <Spacer />
      <Footer />
    </>
  );
}
