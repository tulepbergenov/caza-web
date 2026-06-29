import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_client-layout/")({
  component: Index,
});

function Index() {
  return (
    <section>
      <header>
        <header>
          <h1>hello world</h1>
        </header>
      </header>
    </section>
  );
}
