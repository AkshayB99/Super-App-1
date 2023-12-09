import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./pages/registration/Registration.jsx";
import Category from "./pages/category/SelectCategory.jsx";
import Home from "./pages/Home/Home.jsx";
import Entertainment from "./pages/entertainment/Entertainments.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Registration />,
      },
      {
        path: "/select",
        element: <Category />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/entertainment",
        element: <Entertainment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
