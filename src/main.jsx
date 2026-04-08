import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routers/Router.jsx'
import ContextComponet from './components/ContextComponet/ContextComponet.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextComponet>
      <RouterProvider router={router}>
      </RouterProvider>
    </ContextComponet>
    <ToastContainer/>
  </StrictMode>,
)
