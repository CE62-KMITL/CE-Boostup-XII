import { BrowserRouter, Routes, Route } from 'react-router-dom'

import InitLayout from './layouts/InitLayout'
import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LearnPage from './pages/LearnPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'

import ResetPasswordPopUp from './components/login/LoginPopUp/ResetPasswordPopUp'
import Error404Page from './pages/Error404Page'
import LoadingPage from './pages/LoadingPage'
import ChangePassword from './components/profile/ProfilePopUp/ChangePassword'
import EditProfile from './components/profile/ProfilePopUp/EditProfile'
import LeaderboardPage from './pages/LeaderboardPage'
import BackOfficePage from './pages/BackOfficePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<InitLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/solve" element={<SolveProblemPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/reset-password" element={<ResetPasswordPopUp />} />
        <Route path="/error404" element={<Error404Page />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/backoffice" element={<BackOfficePage />} />

        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/edit-profile" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App