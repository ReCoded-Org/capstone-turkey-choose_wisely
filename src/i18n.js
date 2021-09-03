import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// for passing in lng and translations on init
import enObj from "./locales/en/translation.json";
import trObj from "./locales/tr/translation.json";

const resources = {
  en: {
    translation: enObj,
  },
  tr: {
    translation: trObj,
  },
};

i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    supportedLngs: ["en", "tr"],
    resources,
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
