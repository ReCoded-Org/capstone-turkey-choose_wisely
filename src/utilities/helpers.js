import { LANGUAGES } from "./variables";
import cookies from "js-cookie";

export const lang = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const lang = LANGUAGES.find((l) => l.code === currentLanguageCode);
  return lang;
};

// https://public-api.wordpress.com/wp/v2/sites/reach4healthapp.wordpress.com/posts?_embed
// export const filterUniversities = (universities) => {
//   universitie.sort(function (a, b) {
//     const nameA = a.data.enName.toUpperCase();
//     const nameB = b.data.enName.toUpperCase();
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });
// };
