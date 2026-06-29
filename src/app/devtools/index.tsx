import {
  TanStackDevtools,
  type TanStackDevtoolsReactInit,
} from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { useTheme } from "next-themes";
import { useEffect, useMemo } from "react";

import { STORAGE_KEYS } from "@/shared/config";

export function AppDevtools() {
  const { resolvedTheme } = useTheme();

  const cfg = useMemo<TanStackDevtoolsReactInit["config"]>(
    () => ({
      openHotkey: ["Control", "Shift", "d"],
      theme: resolvedTheme === "dark" ? "dark" : "light",
      triggerHidden: true,
    }),
    [resolvedTheme],
  );

  useSyncDevtoolsConfig(cfg);

  return (
    <TanStackDevtools
      config={cfg}
      key={resolvedTheme}
      plugins={[
        {
          id: "query",
          name: "Query",
          render: () => <ReactQueryDevtoolsPanel />,
        },
        {
          id: "router",
          name: "Router",
          render: () => <TanStackRouterDevtoolsPanel />,
        },
      ]}
    />
  );
}

function useSyncDevtoolsConfig(cfg: TanStackDevtoolsReactInit["config"]) {
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
