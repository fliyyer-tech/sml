import React from 'react'
import Homepage from './pages/home-page'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <Homepage />,
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
