import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-5">
      <h2 className="text-red-500 text-4xl">
        Opps!!! you have made a mistake...........
      </h2>
      <button className="btn btn-error">
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
