import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

import { LazyTanStackRouterDevtools } from "@/app/router";

const RootLayout = () => (
  <>
    <Outlet />
    <Suspense>
      <LazyTanStackRouterDevtools />
    </Suspense>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
