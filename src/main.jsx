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

console.log(import.meta.env.VITE_API_KEY)
var teste = import.meta.env.VITE_API_KEY
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Carrocel />
  </React.StrictMode>
)
