import { Link, isRouteErrorResponse, useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div>
      <h1>{isNotFound ? "Page not found" : "Something went wrong"}</h1>
      <p>
        {isNotFound
          ? "The page you are looking for does not exist."
          : "An unexpected error occurred. Please try again."}
      </p>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default ErrorPage;
