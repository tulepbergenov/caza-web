import type { KyInstance } from "ky";

import { createContext, useContext } from "react";

export const HttpClientContext = createContext<KyInstance | null>(null);

export function useHttpClient(): KyInstance {
  const client = useContext(HttpClientContext);

  if (!client)
    throw new Error("useHttpClient must be used within HttpClientProvider");

  return client;
}
