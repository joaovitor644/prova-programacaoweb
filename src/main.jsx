import React from 'react'
import ReactDOM from 'react-dom/client'
import './components/css/main.css'
import Index from './pages/Index';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from './pages/Contact';
import Films from './pages/Films';
import Series from './pages/Series'
import FilmInfo from './pages/FilmInfo';
import SerieInfo from './pages/SerieInfo';
import Search from './pages/Search';

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
  },
  {
    path: '/films',
    element: < Films />
  },
  {
    path: '/series',
    element: <Series />
  },
  {
    path: '/filmInfo/:id',
    element: <FilmInfo />
  },
  {
    path: '/serieInfo/:id',
    element: <SerieInfo />
  },
  {
    path: '/search',
    element: <Search />,
    loader:async ({request}) => {
      let url = new URL(request.url)
      let keyword = url.searchParams.get("keyword");
      let type = url.searchParams.get("type");
      return {
          "keyword":keyword,
          "type":type
      }
    }
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
)
