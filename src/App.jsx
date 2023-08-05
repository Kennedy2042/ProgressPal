import './App.css'
import ForgetPassword from './Components/Authentication/ForgetPassword/ForgetPassword'
import Login from './Components/Authentication/Login/Login'
import ResetPassword from './Components/Authentication/ResetPassword/ResetPassword'
import SchRegister from './Components/Authentication/SchRegistration/SchRegister'
import SignUp from './Components/Authentication/SignUp/SignUp'
import Verification from './Components/Authentication/Verification/Verification'
import Logout from "./Components/Authentication/LogOut/Logout"
import LogoutSucess from './Components/Authentication/LogoutSucess/LogoutSucess'


function App() {

  return (
    <>
      <SchRegister/>
      <SignUp/>
      <Login/>
      <Verification/>
      <ForgetPassword/>
      <ResetPassword/>
      <Logout/>
      <LogoutSucess/>
    </>
  )
}

export default App