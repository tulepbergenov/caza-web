import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Suspense } from "react";

import { LazyTanStackRouterDevtools } from "@/app/router";

const RootLayout = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
    <Suspense>
      <LazyTanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
