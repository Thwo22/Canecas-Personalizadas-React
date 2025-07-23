import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'

import  {createBrowserRouter, RouterProvider} from "react-router-dom";

import Galeria from "../src/routes/galeria.jsx";
import ComoFunciona from '../src/routes/comoFunciona.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
  {
    path: "/comoFunciona",
    element: <ComoFunciona />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
