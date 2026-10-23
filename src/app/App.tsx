import { Suspense } from "react";
import { AppProviders } from "./providers/AppProviders";
import { RouterProvider } from "react-router";
import router from "./router/router";

export default function App() {
  return (
    <AppProviders>
      <Suspense fallback={<div>Загрузка страницы...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </AppProviders>
  );
}
