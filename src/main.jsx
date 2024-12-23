import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/Routes'
import AuthProvider from './Authprovider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
const queryClient =new QueryClient() 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} /> 
    </AuthProvider>
    </QueryClientProvider>


  </StrictMode>,
)
