import NavBar from './components/utils/NavBar'

import SolveProblemPage from './pages/SolveProblemPage'
import LoginPage from './pages/LoginPage'

import CreateAccountPopUp from './components/login/CreateAccountPopUp'

function App() {
  return (
    <div>
      <LoginPage/>
      {/* <SolveProblemPage/> */}

      <CreateAccountPopUp/>
    </div>
  )
}

export default App