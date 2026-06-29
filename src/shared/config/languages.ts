export type Language = {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  short: string;
};

export type LanguageCode = "en" | "ru";

export const LANGUAGES = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    short: "EN",
  },
  ru: {
    code: "ru",
    label: "Russian",
    nativeLabel: "Русский",
    short: "RU",
  },
} as const satisfies Record<LanguageCode, Language>;

export const DEFAULT_LANGUAGE: LanguageCode = "en";

export const SUPPORTED_LANGUAGES = Object.keys(LANGUAGES) as LanguageCode[];

export const LANGUAGES_LIST = Object.values(LANGUAGES);
