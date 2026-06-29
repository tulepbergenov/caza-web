import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import { IS_PROD } from "@/shared/config/env";
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "@/shared/config/languages";
import { STORAGE_KEYS } from "@/shared/config/storage-keys";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    cleanCode: true,
    debug: !IS_PROD,
    detection: {
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEYS.language,
      order: ["localStorage", "navigator"],
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
  });

document.documentElement.lang = i18n.resolvedLanguage ?? DEFAULT_LANGUAGE;

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});
