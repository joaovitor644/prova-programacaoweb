import React from 'react'
import ReactDOM from 'react-dom/client'
import Carrocel from './components/Carossel';
import './components/css/main.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';

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
    <Banner />
    <Carrocel title="Most Popular Films" url={"https://api.themoviedb.org/3/movie/popular?api_key="+ import.meta.env.VITE_API_KEY + "&language=en-US&page=1"}/>
    
  </React.StrictMode>
)
