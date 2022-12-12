import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/css/main.css'
import Index from './pages/Index';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
