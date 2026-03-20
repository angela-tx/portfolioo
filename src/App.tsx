import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { WorkPage } from './pages/WorkPage'
import { ProjectPage } from './pages/ProjectPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
