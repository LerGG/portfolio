import { css } from "styled-components";
import { theme } from "../theme";

export const GlobalBody = css`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000000;
    color: #ffffff;
    font-size: 16px;
    overflow-x: hidden;
  }
  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const GlobalLink = css`
  a {
    color: #fff;
    text-decoration: none;
  }
  &a:active {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #fff;
  }
`;

export const GlobalHeadline1 = css`
  h1 {
    margin: 0;
    font-size: 30px;
    letter-spacing: 0.6px;
    @media (min-width: ${theme.breakpoints.sm}) {
      font-size: 60px;
    }
  }
`;

export const GlobalHeadline2 = css`
  h2 {
    margin: 0;
    font-size: 30px;
    letter-spacing: -0.8px;
  }
  @media (min-width: ${theme.breakpoints.sm}) {
    h2 {
      font-size: 36px;
    }
  }
`;

export const GlobalSwiper = css`
  :root {
    --swiper-theme-color: #ffffff !important;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .swiper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .swiper-slide {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 1px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-pagination-bullet {
    background-color: #717171;
    width: 15px !important;
    height: 15px !important;
    margin: 5px !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #ffffff !important;
    opacity: 1 !important;
  }

  .swiper-pagination-horizontal {
    bottom: -8px !important;
  }
`;

export const GlobalAppearAnimation = css`
  @keyframes animationAppear {
    0% {
      filter: blur(3px);
    }
    25% {
      filter: blur(2px);
    }
    50% {
      filter: blur(1px);
    }
    100% {
      filter: blur(0px);
    }
  }
`;
