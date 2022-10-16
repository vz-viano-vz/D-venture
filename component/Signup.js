import React, { useState } from "react";
import Link from "next/link"
import { useAuth } from "../context/AuthContext";
import { updateCurrentUser } from "firebase/auth";
import { router } from "next/router";


const Signup = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLoggingIn, setIsLoggingIn } = useState(true)

    const { login, signup, currentUser  } = useAuth()
    console.log(currentUser)
    async function submitHandler(){
        
        if (!email||!password){
            alert("Please enter your email address and password")
            return
        }
        else if(password.length<6){
            alert("Password must be  more than 6 characters")
            return
        }
        
        
            try {
                await signup(email, password)
                router.push('/login')
            } catch (err) {
                alert("Gagal signup")
            }
            
            
        
    }

    return ( 
        <div>
        <section style={{backgroundColor: '#4ABDAC', minHeight: '100vh'}} class="vh-100" >
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                    <div style={{borderRadius: '25x', backgroundColor:'white', boxShadow: '10px 10px 20px rgb(35,34,34)'}} class="card text-black" >
                    <div class="card-body p-md-4">
                        <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
        
                        <form class="mx-1 mx-md-4">        
                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input value={email} onChange={(e) => setEmail( e.target.value)} type="email" required id="form3Example3c" class="form-control" />
                                <label class="form-label" for="form3Example3c">Your Email</label>
                            </div>
                            </div>
        
                            <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                                <input value={password} onChange={(e) => setPassword( e.target.value)} type="password" required id="form3Example4c" class="form-control" />
                                <label class="form-label" for="form3Example4c">Password</label>
                            </div>
                            </div>        
                            <div class="form-check d-flex justify-content-center mb-5">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label class="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                            </div>
        
                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={submitHandler} type="button" class="btn btn-primary btn-lg">Register</button>
                            </div>
        
                        </form>
        
                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
        
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            class="img-fluid" alt="Sample image"/>
        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div> );
}
 
export default Signup;