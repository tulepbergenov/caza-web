import type { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { STORAGE_KEYS } from "@/shared/config";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey={STORAGE_KEYS.theme}
    >
      {children}
    </NextThemesProvider>
  );
}
