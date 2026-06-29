import type { ErrorComponentProps } from "@tanstack/react-router";

import { useTranslation } from "react-i18next";

export function ErrorFallback({ error, reset }: ErrorComponentProps) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <p>{t("errorBoundary.title")}</p>
      <p className="text-sm opacity-60">
        {error instanceof Error
          ? error.message
          : t("errorBoundary.unknownError")}
      </p>
      <button onClick={reset} type="button">
        {t("errorBoundary.retry")}
      </button>
    </div>
  );
}
