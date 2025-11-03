import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-red-500">
      <h2>ooppss!!! you have made a mistake</h2>
      <button>
        <Link to="/">go back to home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
