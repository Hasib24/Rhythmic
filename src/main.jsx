import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthProvider from './providers/AuthProvider'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';
axios.interceptors.request.use((request)=>{
  request.headers.authorizatn = `bearer ${JSON.parse(localStorage.getItem('jwtAccessToken'))}`
  return request
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)