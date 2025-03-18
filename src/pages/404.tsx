import React from "react";
import "../App.css";

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  interface RouteError {
    status?: number;
    statusText?: string;
    data?: any;
    error?: any;
    message?: string;
  }

  const error = useRouteError() as RouteError;

  return (
    <>
      <div className="flex-col transcenter flexc font-inter">
        <h1 className="text-2xl font-bold text-gray-400">{error.status}</h1>
        <br />
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="mt-3 text-base">Sorry, an unexpected error has occured</p>
        <p className="mt-2 text-base">{error.statusText || error.message}</p>
      </div>
    </>
  );
}

export default ErrorPage;
