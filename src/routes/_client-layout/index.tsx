import { createFileRoute } from "@tanstack/react-router";

import { ThemeToggler } from "@/features/theme-toggler";

export const Route = createFileRoute("/_client-layout/")({
  component: Index,
});

function Index() {
  return (
    <section>
      <header className="container">
        <header>
          <h1>Chat & Send Files with your organization</h1>
          <ThemeToggler />
        </header>
      </header>
    </section>
  );
}
