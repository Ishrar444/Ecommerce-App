import React, { useEffect } from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'


const Login= () => {
  const [register, setRegister] = useState({

    email: "",
    password: "",

  })
  const navigate = useNavigate()
  let local = localStorage.getItem("registerData")
  let data = JSON.parse(local)
  const handleSubmit = () => {
    if (data.email === register.email || data.password === register.password) {
      navigate("/")
    } else {
      alert("user not exist")
    }


  }

  return (
    <>
      <Helmet>
        
        <title>Login</title>
    </Helmet>
    <form className="form" onSubmit={handleSubmit}>
      <p className="title">Login</p>
      <p className="message">Signup now and get full access to our app. </p>
      <div className="flex">


      </div>
      <label>
        <input required placeholder="" type="email" className="input" value={register.email} onChange={(e) => {
          setRegister((prev) => {
            return { ...prev, email: e.target.value }
          })
        }} />
        <span>Email</span>
      </label>
      <label>
        <input required  placeholder="" type="password" className="input" value={register.password} onChange={(e) => {
          setRegister((prev) => {
            return { ...prev, password: e.target.value }
          })
        }} />
        <span>Password</span>
      </label>
      <button className="submit">Submit</button>
    </form>
    </>

  )
}

export default Login