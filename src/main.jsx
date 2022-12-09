import React from 'react'
import ReactDOM from 'react-dom/client'
import Carrocel from './components/Carossel';
import './components/css/main.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Carrocel />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carrocel />
  </React.StrictMode>
)
