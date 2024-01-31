import { StyledAbsoluteOverlay } from "../Basic/StyledAbsoluteOverlay";
import { StyledAbsoluteWrapper } from "../Basic/StyledAbsoluteWrapper";
import Image from "next/image";
import React from "react";

export default function HeroImage() {
  return (
    <>
      <StyledAbsoluteOverlay />
      <StyledAbsoluteWrapper style={{ zIndex: 3 }}>
        <Image
          style={{ opacity: "0.1" }}
          width={1920}
          height={1080}
          src={"/img/timo-trans.png"}
          alt={"abstract dark baground"}
        />
      </StyledAbsoluteWrapper>
      <StyledAbsoluteWrapper>
        <Image
          style={{ zIndex: 1 }}
          src={"/img/black_waves_edit.jpg"}
          alt={"abstract dark baground"}
          width={1920}
          height={1080}
          priority={true}
        />
      </StyledAbsoluteWrapper>
    </>
  );
}
