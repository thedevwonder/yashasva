import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home";
import { Posts } from "./components/posts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          path: "posts",
          element: <Posts />,
        },
      ],
    },
  ]);
  return (
    <div className="page">
      <Home/>
      <Posts/>
    </div>
  );
};

export default App;
