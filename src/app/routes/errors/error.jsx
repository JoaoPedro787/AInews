import { Link, useParams, useLocation } from "react-router-dom";

const Error = () => {
  const { errorID } = useParams();
  const { pathname } = useLocation();

  let error;

  if (pathname == `/error/${errorID}`) {
    const data = [
      {
        id: 400,
        title: "Bad Request",
        desc: "The request could not be understood or was missing required parameters.",
      },
      {
        id: 401,
        title: "Unauthorized",
        desc: "Authentication is required to access this resource.",
      },
      {
        id: 403,
        title: "Forbidden",
        desc: "You don’t have permission to view this page.",
      },
      {
        id: 404,
        title: "Page Not Found",
        desc: "The page you’re looking for doesn’t exist or has been moved.",
      },
      {
        id: 408,
        title: "Request Timeout",
        desc: "The server took too long to respond. Please try again later.",
      },
      {
        id: 429,
        title: "Too Many Requests",
        desc: "You have sent too many requests in a given amount of time.",
      },
      {
        id: 500,
        title: "Internal Server Error",
        desc: "Something went wrong on our end. Please try again later.",
      },
      {
        id: 502,
        title: "Bad Gateway",
        desc: "The server received an invalid response from the upstream server.",
      },
      {
        id: 503,
        title: "Service Unavailable",
        desc: "The server is temporarily unavailable. Please try again later.",
      },
      {
        id: 504,
        title: "Gateway Timeout",
        desc: "The server did not receive a timely response. Try again soon.",
      },
    ];

    error = data.find((el) => el.id == errorID) || {
      id: "Error",
      title: "Unexpected Error",
      desc: "An unexpected error occurred. Please try again or contact support.",
    };
  } else {
    error = {
      id: 404,
      title: "Page Not Found",
      desc: "The page you’re looking for doesn’t exist or has been moved.",
    };
  }

  return (
    <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">{error.id}</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          {error.title}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          {error.desc}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
