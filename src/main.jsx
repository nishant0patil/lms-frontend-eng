import './index.css'


import React from 'react'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from  'react-dom/client'


import App from './App.jsx'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  < Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </ Provider>
   
)
