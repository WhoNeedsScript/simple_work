  'use client';

import {FC, useEffect, useState} from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface LoginProps{}

const Login:FC<LoginProps> = ({})=>
{
    const [form,setForm]= useState("login");
    

    
  const changeForm=(value:string)=>{
        setForm(value);
  }


    return(
            form === "login" ? 
            <LoginForm changeForm={() => changeForm("signup")}/> :
            form === "signup"?
            <SignupForm changeForm={() => changeForm("login")}/>:
            <></>
          )
}

export default Login;
