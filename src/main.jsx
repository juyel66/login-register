import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    // loader: () => fetch("https://sever-jr-jobs-bd.vercel.app/jobs")
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
  element: <Register></Register>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
