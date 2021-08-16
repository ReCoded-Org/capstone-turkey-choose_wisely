import { LANGUAGES } from "./variables";
import cookies from "js-cookie";

export const lang = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const lang = LANGUAGES.find((l) => l.code === currentLanguageCode);
  return lang;
};
