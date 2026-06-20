import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login'
import Register from './views/Register'
import Kanban from './views/Kanban'

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';




export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<Navigate to="/kanban" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Route>

        <Route element={<DashboardLayout/>}>
          <Route path="/kanban" element={<Kanban />} />
        </Route>


      </Routes>
    </HashRouter>


  )
}