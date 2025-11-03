import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import AppliedJobs from "./pages/AppliedJobs";
import Statistics from "./pages/Statistics";
import { ToastContainer } from "react-toastify";

const webRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          //fetch categories data
          const categoriesResponse = await fetch("/categories.json");
          const categoriesData = await categoriesResponse.json();

          //fetch jobs data
          const jobsResponse = await fetch("/jobs.json");
          const jobsData = await jobsResponse.json();

          // return data to home component
          return { categoriesData, jobsData };
        },
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics/:id",
        element: <Statistics></Statistics>,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={webRouter}></RouterProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>
);
