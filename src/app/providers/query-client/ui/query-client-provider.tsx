import type { ReactNode } from "react";

import { QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../lib/query-client";

export function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
}
