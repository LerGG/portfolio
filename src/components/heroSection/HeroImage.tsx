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
          style={{ opacity: "0.1", objectFit: "cover" }}
          sizes="100vw"
          fill
          quality={20}
          src={"/img/black_waves.webp"}
          alt={"abstract dark baground"}
        />
      </StyledAbsoluteWrapper>
      <StyledAbsoluteWrapper>
        <Image
          style={{ zIndex: 1, objectFit: "cover" }}
          src={"/img/black_waves_lerry.webp"}
          alt={"abstract dark baground"}
          quality={20}
          fill
          sizes="100vw"
          priority
        />
      </StyledAbsoluteWrapper>
    </>
  );
}
