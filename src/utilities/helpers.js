import { LANGUAGES } from "./variables";
import cookies from "js-cookie";
import noLogo from "./../images/uni_logo.svg";

export const lang = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const lang = LANGUAGES.find((l) => l.code === currentLanguageCode);
  return lang;
};

export const getImageUrl = (url) => {
  const urlArray = url.split(":");
  const logoUrl = urlArray[0] === "data" ? noLogo : url;
  return logoUrl;
};
