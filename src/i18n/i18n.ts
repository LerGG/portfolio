import { initReactI18next } from "react-i18next";

import i18next from "i18next";
import { en } from "./locales/en";
import { de } from "./locales/de";

const resources = {
  en,
  de,
} as const;

export enum LANGUAGES {
  de = "Deutsch",
  en = "English",
}

/**
 * Language keys
 */
export const supportedLanguages = Object.keys(resources);

i18next.use(initReactI18next).init({
  saveMissing: true,
  missingKeyHandler: (ng, ns, key, fallbackValue) => {
    throw new Error(`Key not found ${key}, ${ng}, ${ns}, ${fallbackValue}`);
  },
  resources,
  defaultNS: "translations",
  load: "languageOnly",
  supportedLngs: supportedLanguages,
  fallbackLng: "en",
});
