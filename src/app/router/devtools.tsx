import {
  TanStackDevtools,
  type TanStackDevtoolsReactInit,
} from "@tanstack/react-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { useTheme } from "next-themes";
import { useEffect, useMemo } from "react";

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
    const raw = localStorage.getItem("tanstack_devtools_settings");
    if (!raw) return;
    try {
      localStorage.setItem(
        "tanstack_devtools_settings",
        JSON.stringify({ ...JSON.parse(raw), ...cfg }),
      );
    } catch (error) {
      console.error(error);
    }
  }, [cfg]);
}
