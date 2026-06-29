import { LANGUAGES_LIST } from "@/shared/config/languages";

import { useLanguageSelect } from "../model/use-language-select";

export function LanguageSelect() {
  const { changeLanguage, currentLanguage } = useLanguageSelect();

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value as Parameters<typeof changeLanguage>[0])}
      value={currentLanguage.code}
    >
      {LANGUAGES_LIST.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.nativeLabel}
        </option>
      ))}
    </select>
  );
}
