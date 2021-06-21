import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import common_dz from "./translations/dz/common.json";
import common_en from "./translations/en/common.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
      common: common_en
    },
  dz: {
    common:common_dz
  },
};
// // // pulls already set language from localstorage
i18n
.use(initReactI18next).init({
  // we init with resources
  resources,
  lng: "dz",
  fallbackLng: "dz",
  debug: true,

  // have a common namespace used around the full app
  ns: ["common"],
  defaultNS: "common",
  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false
  }
});

export default i18n;


// i18n.use(initReactI18next).init({
//   // we init with resources
//   resources:resources,
//   fallbackLng: "dz",
//   debug: true,

//   // have a common namespace used around the full app
//   ns: ["translations"],
//   defaultNS: "translations",

//   keySeparator: false, // we use content as keys

//   interpolation: {
//     escapeValue: false, // not needed for react!!
//     formatSeparator: ","
//   },

//   react: {
//     wait: true
//   }
// });

// export default i18n;
