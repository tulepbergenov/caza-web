import { TanStackDevtools, type TanStackDevtoolsReactInit } from "@tanstack/react-devtools";
import { useTheme } from "next-themes";
import { useMemo } from "react";

import { devtoolsPlugins } from "./lib/devtools-plugins";
import { useSyncDevtoolsConfig } from "./lib/use-sync-devtools-config";

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

  return <TanStackDevtools config={cfg} key={resolvedTheme} plugins={devtoolsPlugins} />;
}
