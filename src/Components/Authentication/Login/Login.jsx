import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {

    const [schoolEmail, setSchoolEmail] = useState("")
    const [password, setPassword] = useState("")
    const [successErrorMessage, setSuccessErrorMessage] = useState("")
    const [emailError, setEmailError] = useState("")

    const url = "https://progresspal-8rxj.onrender.com/progressPal/login"
    const data = { schoolEmail, password }

    async function SignUp(e) {
        e.preventDefault();


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (schoolEmail === "" || !emailRegex.test(schoolEmail)) {
            return setEmailError("Please input a valid email address.");
        }

        axios
            .post(url, data)

            .then((res) => {
                console.log(res.data)
                setSuccessErrorMessage(res.data.message)
            })
            .catch((err) => {
                console.log(err)
                setSuccessErrorMessage(err.response.data.message);
            });

        console.log(data)

    }

    return (
        <div className='holder'>

            <div className='holder2'>
                <div className='Logo'>
                    <img src="./src/Components/ProgressPalLogo.png" alt="" />

                </div>
                <div className='down'>

                    <div className='text'>
                        <h1>Welcome To ProgressPal</h1>
                    </div>
                    <input type="email" className={`${emailError.length > 0 ? "error" : ""} Input`} placeholder='UserName' value={schoolEmail} onChange={(e) => setSchoolEmail(e.target.value)} />
                    <p>{emailError}</p>
                    <input type="password" className='Input' placeholder='PassWord' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <p>{successErrorMessage}</p>
                    <div className='text2'>
                        <div className='left'>
                            <p>Don't have an account? <span>Sign in</span></p>
                        </div>
                        <div className='right'>
                            <p style={{cursor: "pointer"} }>Forgotten password?</p>
                        </div>
                    </div>
                    <button onClick={SignUp}>LOGIN</button>
                    <h2>Register Your School</h2>
                </div>
            </div>
        </div>
    )
}

export default Login