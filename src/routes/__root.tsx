import { createRootRoute, Outlet } from "@tanstack/react-router";

import { AppDevtools } from "@/app/devtools";
import { ThemeProvider } from "@/app/providers/theme-provider";

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
      <AppDevtools />
    </ThemeProvider>
  );
}

export const Route = createRootRoute({ component: RootLayout });
