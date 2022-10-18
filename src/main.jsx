import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './style.css'
import WebApp from './WebApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WebApp />
    </BrowserRouter>
   
  </React.StrictMode>
)
