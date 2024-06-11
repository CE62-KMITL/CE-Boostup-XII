import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import StoreProvider from './provider/store.provider'
import ProtectedProvider from './provider/protected.provider'
import VerifyProvider from './provider/verify.provider'
import { Role } from './enum/roles.enum'

import InitLayout from './layouts/InitLayout'
import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LearnPage from './pages/LearnPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import Error404Page from './pages/Error404Page'
import LeaderboardPage from './pages/LeaderboardPage'
import BackOfficePage from './pages/BackOfficePage'

export default function App() {
  return (
    <BrowserRouter basename='/grader'>
      <QueryClientProvider client={new QueryClient()}>
        <Routes>
          <Route path='*' element={<Error404Page />} />
          <Route element={<StoreProvider />}>
            <Route element={<VerifyProvider />}>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route element={<ProtectedProvider allowedRoles={[Role.User, Role.Admin, Role.Staff, Role.SuperAdmin, Role.Reviewer]} />}>
              <Route path="/solve/:problemId" element={<SolveProblemPage />} />
              <Route element={<InitLayout />}>
                <Route path="/home/:page" element={<HomePage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              <Route path='/create-problem' element={<BackOfficePage />} />
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter >
  );
}