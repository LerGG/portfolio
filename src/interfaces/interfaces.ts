import { CardTag } from "../types/types";

/**
 * CSS Text alignment options
 */
export interface TextAlign {
  textAlign: "left" | "right" | "center";
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

export interface RecaptchaResponse {
  success?: boolean; // Whether the verification was successful
  challenge_ts?: string; // Timestamp of the challenge (ISO format)
  hostname?: string; // The hostname where the request originated
  score?: number; // The score given by reCAPTCHA (0.0 - 1.0)
  action?: string; // The action name for the request (e.g., 'enquiryFormSubmit')
  "error-codes"?: string[]; // Optional: Error codes in case of failure
}
