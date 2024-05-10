import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LearnPage from './pages/LearnPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

import CreateAccountPopUp from './components/login/CreateAccountPopUp'
import ForgotPasswordPopUp from './components/login/ForgotPasswordPopUp'
import RecognizedPopUp from './components/login/RecognizedPopUp'
import ResetPasswordPopUp from './components/login/ResetPasswordPopUp'
import ButtonTemplate from './pages/ButtonTemplate'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App