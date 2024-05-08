import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'

import CreateAccountPopUp from './components/login/CreateAccountPopUp'
import ForgotPasswordPopUp from './components/login/ForgotPasswordPopUp'
import RecognizedPopUp from './components/login/RecognizedPopUp'
import ResetPasswordPopUp from './components/login/ResetPasswordPopUp'

function App() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      <RegisterPage/>
      {/* <SolveProblemPage/> */}

      {/* <CreateAccountPopUp/> */}
      {/* <ForgotPasswordPopUp/> */}
      {/* <RecognizedPopUp/> */}
      <ResetPasswordPopUp/>
    </div>
  )
}

export default App