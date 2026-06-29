import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_client-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
