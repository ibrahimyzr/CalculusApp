import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Register from "./components/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Messages from "./components/Messages.jsx";
import Courses from "./components/Courses.jsx";

import Calculus1 from "./components/Calculus1.jsx";
import Calculus2 from "./components/Calculus2.jsx";
import Calculus3 from "./components/Calculus3.jsx";
import Diff from "./components/Diff.jsx";
import Linear from "./components/Linear.jsx";
import AppliedMath from "./components/AppliedMath.jsx";
import Numeric from "./components/Numeric.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      //////////////////////////////

      //////////////////////////////
      {
        path: "courses",
        element: <Courses />,
      },

      {
        path: "calculus1",
        element: <Calculus1 />,
      },
      {
        path: "calculus2",
        element: <Calculus2 />,
      },
      {
        path: "calculus3",
        element: <Calculus3 />,
      },
      {
        path: "diff",
        element: <Diff />,
      },
      {
        path: "linear",
        element: <Linear />,
      },

      {
        path: "applied",
        element: <AppliedMath />,
      },
      {
        path: "numeric",
        element: <Numeric />,
      },
      {
        path: "messages",
        element: (
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
