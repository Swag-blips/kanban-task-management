import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div>This is the error page</div>
      <p>{error.statusText || error.message}</p>
    </>
  );
};

export default ErrorPage;
