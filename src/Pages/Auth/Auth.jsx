import React from 'react'
import './Auth.css'
import logo from '../../assets/icon.png'
import { useState } from 'react'
import AboutAuth from './AboutAuth'
import {signup,login} from '../../actions/auth'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function Auth() {

    const [isSignup, setisSignup] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleauthSwitch = () => {
        setisSignup(!isSignup);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!email) alert("enter email")
        if(!password) alert("enter password")
        if(isSignup){
            if(!name)
            alert("enter name")

            dispatch(signup({name,email,password},navigate))
        }
        else
        {
            dispatch(login({email,password},navigate))
        }


    }

  return (
    <section className='auth-section'>

        <div className='auth-container-1'>
            {isSignup &&  <AboutAuth/>}
        </div>
       
        <div className="auth-container-2">

            {!isSignup && <img src={logo} alt="logo" />}

            <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                        <div><label htmlFor="name"><h5>Display Name</h5></label></div>
                        <input type="text" name="name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
                        </>
                    )}

                    <div><label htmlFor="email"><h5>Email</h5></label></div>
                    <input type="email" name="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>

                    <div style={{display: "flex", justifyContent: "space-between"}}><label htmlFor="password"><h5>Password</h5></label>
                    {!isSignup && <span style={{color: "#008fd7", fontSize: "12px", marginTop: "7px"}}>Forgot password ?</span>}
                    </div>
                    <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                    {isSignup && <p style={{color: "#666767", fontSize: "12px"}}> Passwords must contain at least eight
                    characters, including at least 1 letter <br/> and 1
                    number.
                    </p>}

                    {
                        isSignup && 
                        <label htmlFor="checkbox" style={{display: "flex"}}>
                            <input type="checkbox" id='checkbox' name='checkbox'/>
                            <p style={{fontSize: "12px"}}>Opt-in to receive occasional
                            product updates, user research invitations, <br/>
                            company announcements, and digests.</p>
                        </label>
                    }    

                    <button className='auth-form-button' >{isSignup? "sign up" : "log in"}</button>

                    { isSignup && 
                    <p style={{color: "#666767"}}>By clicking “Sign up”, you agree to our <span style={{color: "#008fd7"}}>terms of <br/>
                    service , privacy policy </span> and <span style={{color: "#008fd7"}}>cookie policy </span></p>
                    }

            </form>

            { !isSignup && 
            <p>Dont't have an account? <span onClick={handleauthSwitch} style={{cursor: "pointer", color: "#008fd7"}}>Sign up</span> </p>
            }

            { isSignup && 
            <p>Already have an account? <span onClick={handleauthSwitch} style={{cursor: "pointer", color: "#008fd7"}}>Log in</span> </p>
            }

        </div>
    </section>
  )
}
