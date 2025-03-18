import React, { JSX } from "react";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./pages/404.tsx";
import Admin from "./pages/admin";

function Router() {
  const routeConfig: Array<{
    path: string;
    element: JSX.Element;
    errorElement?: JSX.Element;
  }> = [
    {
      path: "/",
      element: <Admin />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <App />,
    },
    {
      path: "/contact",
      element: <App />,
    },
    // Tambahkan konfigurasi rute lainnya
  ];

  const router = createBrowserRouter(routeConfig);

  return (
    <>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </>
  );
}

export default Router;
