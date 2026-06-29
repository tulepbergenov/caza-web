import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { DEFAULT_LANGUAGE, type LanguageCode, LANGUAGES } from "@/shared/config/languages";

export function useLanguageSelect() {
  const { i18n } = useTranslation();

  const code = (i18n.resolvedLanguage as LanguageCode) ?? DEFAULT_LANGUAGE;
  const currentLanguage = LANGUAGES[code] ?? LANGUAGES[DEFAULT_LANGUAGE];

  const changeLanguage = useCallback(
    async (lang: LanguageCode) => {
      await i18n.changeLanguage(lang);
    },
    [i18n],
  );

  return { changeLanguage, currentLanguage };
}
