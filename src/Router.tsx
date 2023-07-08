import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/deafultLayout'
import { Contact } from './pages/Contact/index'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home/index'
import { Projects } from './pages/Projects'
import { SignIn } from './pages/SignIn'
import { About } from './pages/About'
import { ProjectDetail } from './pages/ProjectDetail'

export function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />} >
                  <Route path='/' element={<Home />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/projetos' element={<Projects />} />
                  <Route path='/projetos/:id' element={<ProjectDetail />} />
                  <Route path='/sobre' element={<About />} />
                </Route>
                
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
  )
}
