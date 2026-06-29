import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

export const devtoolsPlugins = [
  { id: "query", name: "Query", render: () => <ReactQueryDevtoolsPanel /> },
  { id: "router", name: "Router", render: () => <TanStackRouterDevtoolsPanel /> },
];
