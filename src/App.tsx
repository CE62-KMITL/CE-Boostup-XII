import NavBar from './components/utils/NavBar'
import Footer from './components/utils/Footer'
import LoginCard from './components/login/LoginCard'
import ForgotPasswordPopUp from './components/login/ForgotPasswordPopUp'
import CreateAccountPopUp from './components/login/CreateAccountPopUp'
import RecognizedPopUp from './components/login/RecognizedPopUp'
import ResetPasswordPopUp from './components/login/ResetPasswordPopUp'
import RegisterCard from './components/register/RegisterCard'

function App() {

  return (
    <div className='gradient-background'>
      {/* <NavBar /> */}
      {/* <LoginCard /> */}
      {/* <ForgotPasswordPopUp /> */}
      {/* <CreateAccountPopUp /> */}
      {/* <RecognizedPopUp /> */}
      {/* <ResetPasswordPopUp /> */}
      {/* <Footer /> */}
      <RegisterCard />
    </div>
  )
}

export default App