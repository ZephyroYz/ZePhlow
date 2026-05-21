import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login'
import Register from './views/Register'
import PublicLayout from './layouts/PublicLayout';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
        </Route>


      </Routes>
    </BrowserRouter>


  )
}