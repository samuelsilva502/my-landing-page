import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"

import Home from './Routes/Home.jsx';
import Newpost from './Routes/Newpost.jsx';

import './index.css';

const router = createBrowserRouter([
  { 
     element: <App />,
     children: [
      {
        path: "/",
        element:  <Home />,
      },
      {
        path: "/new",
        element: <Newpost />,
      }
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
