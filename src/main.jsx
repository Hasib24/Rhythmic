import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
import AuthProvider from './providers/AuthProvider'
import axios from 'axios'

import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
const queryClient = new QueryClient()



// axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.baseURL = 'https://assignment-12-server-eight-roan.vercel.app';
axios.interceptors.request.use((request)=>{
  request.headers.authorizatn = `bearer ${JSON.parse(localStorage.getItem('jwtAccessToken'))}`
  return request
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </QueryClientProvider>
)