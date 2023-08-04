import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineFileImage } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BiSolidHide, BiSolidShow } from 'react-icons/bi'
import "./SignUp.css"
import "./SignUpMedia.css"


const SignUp = () => {

    const [signUpPass, setSignUpPass] = useState(false)
    const [signUpConfirmPass, setSignUpConfirmPass] = useState(false)
    const [teacherName, setTeacherName] = useState("")
    const [teacherClass, setTeacherClass] = useState("")
    const [teacherEmail, setTeacherEmail] = useState("")



    const url ="https://progresspal-8rxj.onrender.com/progressPal/register"


    return (
        <>
            <div className="sigUpBody">
                <div className="SignUpLogo">
                    <img src="./src/Components/ProgressPalLogo.png" alt="" />
                </div>
                <div className="sigUpMainBody">
                    <h1>Sign Up</h1>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <FaUserAlt className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='teacher Name' value={teacherName} onChange={(e)=>setTeacherName(e.target.value)}/>
                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <FaUserAlt className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='Teacher Class' value={teacherClass} />
                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineMail className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="text" placeholder='Teacher Email' value={teacherEmail}/>
                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineMail className='signUpNameIcon' />
                        </div>
                        <input className='signUpNameInput' type="email" placeholder='Teacher Email' value={teacherAge}/>
                    </div>
                    <div className="signUpNameHolder">
                        <div className="signUpNameIconDiv">
                            <AiOutlineFileImage className='signUpNameIcon' />
                        </div>
                        <div className="signUpTeacherInput">
                        <input className='' type="file" placeholder='Teacher Email' value={teacherImage}/>

                        </div>
                    </div>
                    <div className="signUpPasswordHolder">
                        <div className="signUpPasswordIconDiv">
                            <RiLockPasswordFill className='signUpNameIcon' />
                        </div>
                        <input className='signUpPassordInput' type={signUpPass ? "text" : "password"} placeholder='Password' value={password}/>
                        <div className="signUpshowPassword">
                        { signUpPass ?
                            <BiSolidHide style={{cursor: "pointer"}} onClick={()=>setSignUpPass(false)}/>: <BiSolidShow style={{cursor: "pointer"}} onClick={()=>setSignUpPass(true)}/>}
                        </div>
                    </div>
                    <div className="signUpPasswordHolder">
                        <div className="signUpPasswordIconDiv">
                            <RiLockPasswordFill className='signUpNameIcon' />
                        </div>
                        <input className='signUpPassordInput' type={signUpConfirmPass ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} />
                        <div className="signUpshowPassword">
                            { signUpConfirmPass ?
                            <BiSolidHide style={{cursor: "pointer"}} onClick={()=>setSignUpConfirmPass(false)}/>: <BiSolidShow style={{cursor: "pointer"}} onClick={()=>setSignUpConfirmPass(true)}/>} 
                        </div>
                    </div>
                    <p>Already have an Account? <span>Sign In</span></p>
                    <div className="signUpPasswordHolder">
                        <button className='signUpSubmitBtn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp