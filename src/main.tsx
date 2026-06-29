import { RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";

import { router } from "@/app/router";

createRoot(document.querySelector("#root")!).render(
  <RouterProvider router={router} />,
);
