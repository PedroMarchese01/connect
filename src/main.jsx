import {RouterProvider} from "react-router-dom"
import { router } from "./routes/AppRoutes.jsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <RouterProvider router = {router}/>
    <Toaster position="top-center" /> 
    </>
  </StrictMode>,
)
