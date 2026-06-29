import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { LazyTanStackRouterDevtools } from "@/app/router";

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
      <Suspense>
        <LazyTanStackRouterDevtools />
      </Suspense>
    </ThemeProvider>
  );
}

export const Route = createRootRoute({ component: RootLayout });
