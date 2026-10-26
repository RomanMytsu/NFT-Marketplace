import { MainLayout } from "@/app/layouts/Main-Layout/MainLayout";
import { lazy } from "react";
import { createHashRouter } from "react-router";

const HomePage = lazy(() => import("@/pages/home/HomePage"));

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
