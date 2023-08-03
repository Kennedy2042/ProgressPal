import React, { useState } from 'react'
import "./SignUp.css"
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidShow, BiSolidHide } from "react-icons/bi"
import "./SignUpMedia.css"

const SignUp = () => {

    const [revealPassword, setRevealPassword] = useState(false)
    const [confirmRevPsswrd, setConfirmRevPsswrd] = useState(false)


    return (
        <>
            <div className="SignUpContainer">
                <div className="signUplogoContainer">
                    <div className="signUpLogodiv">
                        <img src="./src/Components/ProgressPalLogo.png" alt="" />
                    </div>
                </div>
                <div className="sigUpForm">
                    <div className="leftSideSignUpContainer">
                        <div className='leftSideSignUp'>
                            <h1>Sign Up</h1>
                            <div className="firstName">
                                <h3>First Name</h3>
                                <input type="text" placeholder='First Name' className='firstNameInput' />
                                <FaUserAlt className='firstNameInputIcon' />
                            </div>
                            <div className="firstName">
                                <h3>Last Name</h3>
                                <input type="text" placeholder='Last Name' className='firstNameInput' />
                                <FaUserAlt className='firstNameInputIcon' />
                            </div>
                            <div className="firstName">
                                <h3>Email</h3>
                                <input type="text" placeholder='Email' className='firstNameInput' />
                                <AiOutlineMail className='firstNameInputIcon' />
                            </div>
                            <div className="firstName">
                                <h3>Password</h3>
                                <input type={revealPassword ? "text" : "password"} placeholder='Password' className='firstNameInput' />
                                <RiLockPasswordFill className='firstNameInputIcon' />
                                {
                                    revealPassword ? <BiSolidHide className='firstNamePasswordIcon' onClick={() => {
                                        setRevealPassword(false)
                                    }} /> : <BiSolidShow className='firstNamePasswordIcon' onClick={() => {
                                        setRevealPassword(true)
                                    }} />
                                }
                            </div>
                            <div className="firstName">
                                <h3>Confirm Password</h3>
                                <input type={confirmRevPsswrd ? "text" : "password"} placeholder='Confirm Password' className='firstNameInput' />
                                <RiLockPasswordFill className='firstNameInputIcon' />
                                {
                                    confirmRevPsswrd ? <BiSolidHide className='firstNamePasswordIcon' onClick={() => {
                                        setConfirmRevPsswrd(false)
                                    }} /> : <BiSolidShow className='firstNamePasswordIcon' onClick={() => {
                                        setConfirmRevPsswrd(true)
                                    }} />
                                }
                            </div>
                            <div className="signUpBtnMobile">
                                <button>Back</button>
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>
                    <div className='RightSideSignup'>
                        <div className="RightSideSignupContainer">
                            <div className='RightSideSignupImg'>
                                <img src="./src/Components/undraw_onboarding_re_6osc 1.png" alt="" />
                            </div>
                            <div className="signUpBtn">
                                <button>Back</button>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp