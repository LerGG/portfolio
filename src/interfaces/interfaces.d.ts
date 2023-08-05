/**
 * CSS Text alignment options
 */
export interface TextAlign {
  textAlign: "left" | "right" | "center" | undefined;
}

/**
 * Navigation bar Item
 */
export interface NavBarItem {
  name: string;
  url: string;
  imgUrl: string;
}

/**
 * Project Card
 */
export interface ProjectSwipe {
  text: string;
  imgUrl: string;
  url: string;
  tag: CardTag;
  location: string;
}

export interface ContactPostProps {
  email: string;
  name: string;
  surname: string;
  message: string;
  gReCaptchaToken: string;
}
