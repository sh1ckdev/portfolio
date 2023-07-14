import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationRU from "./locale/ru/translation.json";
import translationEN from "./locale/en/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
