import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

import { AppDevtools } from "@/app/devtools";
import { HttpClientProvider } from "@/app/providers/http-client";
import { QueryClientProvider } from "@/app/providers/query-client";
import { ThemeProvider } from "@/app/providers/theme";
import { ErrorFallback, NotFound, PageLoader } from "@/shared/ui";

function RootLayout() {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <HttpClientProvider>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
          <AppDevtools />
        </HttpClientProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
  errorComponent: ErrorFallback,
  notFoundComponent: NotFound,
});
