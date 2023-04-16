
'use client';

import {FC, useState} from 'react'
import Input from '../general/inputs/input';
import Link from 'next/link';
import Button from '../glassmorph/Button';
import UserService from '../../services/user'

interface LoginFormProps{
  changeForm:any
}

const LoginForm:FC<LoginFormProps> = ({
  changeForm
})=>
{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [id,setId] = useState(-1);

    
  const changeUsername=(event:any)=>{
    setUsername(event.target.value)
  }
  const changePassword=(event:any)=>{
    setPassword(event.target.value)
  }

    const loginUserHandler = (event:any)=>{
        event.preventDefault();
        /*if(newName === '' || newName ==='')
        {
          alert(`Please fill Name and Number`)
          return
        }
        let user = {email:String,username:String,password:String};
      */
      
        const userObject = {
            email: username,
            password: password,
            username:username
        }
          
          UserService
          .LoginUser(userObject)
          .then(response => {
        
            localStorage.setItem("userid", response);

          })
        }
        const handleSignupClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
          event.preventDefault();
          changeForm();
        };

    return(
        <form className='h-full w-100 flex flex-col justify-center items-center'>
            <div className='text-blue-700 font-poppins text-2xl tracking-widest'>Login</div>
            <input type="text" placeholder='username'value={username} onChange={changeUsername} className='input-text m-3'/>
            <input type="password" placeholder='password' value={password} onChange={changePassword} className='input-text m-3'/>
            <Button onClick={loginUserHandler}  text='Login'/>
            <p className='ml-48' onClick={handleSignupClick}>Noch keinen Account?</p> 
          </form>
    )
}


export default LoginForm;