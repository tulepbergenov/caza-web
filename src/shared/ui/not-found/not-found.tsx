import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <p className="text-6xl font-semibold">404</p>
      <p>{t("notFound.title")}</p>
      <Link to="/">{t("notFound.action")}</Link>
    </div>
  );
}
