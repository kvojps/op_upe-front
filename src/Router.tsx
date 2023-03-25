import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import { DefaultLayout } from './layouts/deafultLayout'
import { Contact } from './pages/Contact/index'
import { Home } from './pages/Home/index'

export function Router() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultLayout />} >
                  <Route path='/' element={<Home />} />
                  <Route path='/contato' element={<Contact />} />
                </Route>
                
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
  )
}
