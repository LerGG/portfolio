import "react-i18next";
import { en } from "./locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translations";
    resources: typeof en;
  }
}
