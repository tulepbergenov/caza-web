import { createRootRoute, Outlet } from "@tanstack/react-router";

import { AppDevtools } from "@/app/devtools";
import { HttpClientProvider } from "@/app/providers/http-client";
import { QueryClientProvider } from "@/app/providers/query-client";
import { ThemeProvider } from "@/app/providers/theme";

function RootLayout() {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <HttpClientProvider>
          <Outlet />
          <AppDevtools />
        </HttpClientProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export const Route = createRootRoute({ component: RootLayout });
