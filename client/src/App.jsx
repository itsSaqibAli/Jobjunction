import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Domains from "./Pages/Domains";
import Listing from "./Pages/Listing";
import Company from "./Pages/Company";
import User from "./Pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/domains",
    element: <Domains />,
  },
  {
    path: "/listing",
    element: <Listing />,
  },
  {
    path: "/u/:id",
    element: <User />,
  },
  {
    path: "/c/:id",
    element: <Company />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
