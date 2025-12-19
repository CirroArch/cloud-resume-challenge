import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'css/style.css'
import Layout from './Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

createRoot(document.querySelector('main')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
