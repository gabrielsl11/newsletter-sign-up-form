import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import SuccessAlert from './components/SuccessAlert.jsx'
import './index.css'

var router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/successalert',
    element: <SuccessAlert />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
