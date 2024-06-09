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

// test checkmode
import CheckModePage from './pages/CheckMode'

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
            <Route element={<ProtectedProvider allowedRoles={[Role.User, Role.Admin, Role.Staff]} />}>
              <Route path="/solve/:problemId" element={<SolveProblemPage />} />
              {/* test checkmode */}
              <Route path="/checkmode/:problemId" element={<CheckModePage />}></Route>
              <Route element={<InitLayout />}>
                <Route path="/home/:page" element={<HomePage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter >
  );
}