import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import Routes from './components/Routes/Routes.jsx'
import AboutUs from './components/AboutUs/aboutUs.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/Users/User.jsx'
import Github, { githubInfoLoader } from './components/GitHub/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Routes />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutUs />
      }, {
        path: 'contact',
        element: <Contact />
      }, {
        path: 'user/:userId',
        element: <User />
      },
      {
        path: 'github',
        element: <Github />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
