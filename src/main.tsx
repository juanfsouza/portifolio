import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './App';
import About from './components/Pages/About';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />
  },
  {
    path: 'https://www.youtube.com/results?search_query=typescript+vite+',
    element: <About />
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
