import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import "@/app/init";
import { router } from "@/app/router";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<RouterProvider router={router} />);

document.querySelector("#root-preloader")?.remove();
