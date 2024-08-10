import './index.css'


import React from 'react'
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from  'react-dom/client'


import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
   
)
