import type { ReactNode } from "react";

import { HttpClientContext } from "@/shared/api";

import { httpClient } from "../lib/http-client";

export function HttpClientProvider({ children }: { children: ReactNode }) {
  return <HttpClientContext value={httpClient}>{children}</HttpClientContext>;
}
