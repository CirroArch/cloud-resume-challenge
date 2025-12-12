import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'css/style.css'
import Layout from './Layout.jsx'
import ResumePage from './pages/ResumePage.jsx'

createRoot(document.querySelector('main')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ResumePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
