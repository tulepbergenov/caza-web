import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();

  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      aria-label={t(isDark ? "themeToggler.switchToLight" : "themeToggler.switchToDark")}
      onClick={() => setTheme(nextTheme)}
      type="button"
    >
      {nextTheme}
    </button>
  );
}
