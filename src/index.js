import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homedisplay from "./components/Homedisplay";
import Searching from "./components/Searching/Searching";
import { Errorelement } from "./components/Errorelement";
import Sorting from "./components/Sorting/Sorting";


const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const Approutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homedisplay />,
        errorElement:<Errorelement/>
      },
      {
        path:"searching",
        element:<Searching/>
      },
      {
        path:"sorting",
        element:<Sorting/>,
        errorElement:<Errorelement/>
      }
    ],
  },
]);

root.render(<RouterProvider router={Approutes} />);
