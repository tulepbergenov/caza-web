import type { TanStackDevtoolsReactInit } from "@tanstack/react-devtools";

import { useEffect } from "react";

import { STORAGE_KEYS } from "@/shared/config";

export function useSyncDevtoolsConfig(cfg: TanStackDevtoolsReactInit["config"]) {
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.devtools);
    if (!raw) return;
    try {
      localStorage.setItem(
        STORAGE_KEYS.devtools,
        JSON.stringify({ ...JSON.parse(raw), ...cfg }),
      );
    } catch (error) {
      console.error(error);
    }
  }, [cfg]);
}
