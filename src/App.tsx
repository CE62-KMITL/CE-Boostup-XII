import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitLayout from './layouts/InitLayout'
import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LearnPage from './pages/LearnPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ResetPasswordPage from './pages/ResetPasswordPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/solve" element={<SolveProblemPage />} />
        <Route element={<InitLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}