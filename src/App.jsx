import './App.css'
import ForgetPassword from './Components/Authentication/ForgetPassword/ForgetPassword'
import Login from './Components/Authentication/Login/Login'
import ResetPassword from './Components/Authentication/ResetPassword/ResetPassword'
import SchRegister from './Components/Authentication/SchRegistration/SchRegister'
import SignUp from './Components/Authentication/SignUp/SignUp'
import Verification from './Components/Authentication/Verification/Verification'

function App() {

  return (
    <>
      <SchRegister/>
      <h1>Final Project</h1>
      <SignUp/>
      <Login/>
      <Verification/>
      <ForgetPassword/>
      <ResetPassword/>
    </>
  )
}

export default App