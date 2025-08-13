import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App';
import Test from './components/test';
import About from './components/About';
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Test },
      { path: "about", Component: About },
    ]
  },
  {
    path: "*", Component: NotFound
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
