import { lazy } from "react";

import { IS_PROD } from "@/shared/config";

export const LazyTanStackRouterDevtools = IS_PROD
  ? () => null
  : lazy(async () => {
      const m = await import("@tanstack/react-router-devtools");
      return { default: m.TanStackRouterDevtools };
    });
