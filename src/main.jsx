import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './components/Router/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { Router } from './components/Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
