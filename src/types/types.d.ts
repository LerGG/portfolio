export type TextAlignment = "center" | "left" | "right" | "justify";

export type TextSizes = "14px" | "15px" | "16px" | "18px" | string;

export type HandleFilterSig = (searchParam: string, component: string) => void;

export type CardTag =
  | "Software Engineering"
  | "Content Creation"
  | "Authoring"
  | "Coaching"
  | "Web 3.0";

export type BtnText =
  | "Send Message"
  | "Pending..."
  | "Successfully send!"
  | "Error! Send again!"
  | "Bot detected!";
