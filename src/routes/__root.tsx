import { createRootRoute, Outlet } from "@tanstack/react-router";

import { ThemeProvider } from "@/app/providers/theme-provider";
import { AppDevtools } from "@/app/router";

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
      <AppDevtools />
    </ThemeProvider>
  );
}

export const Route = createRootRoute({ component: RootLayout });
