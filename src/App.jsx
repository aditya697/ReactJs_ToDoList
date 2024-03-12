import { Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPages'

function App() {
  return (
    <Routes>    
      <Route exact path='/' element={<RegisterPage />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/dashboard' element={<DashboardPage />} />
    </Routes>
  )
}

export default App