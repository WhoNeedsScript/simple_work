
'use client';

import {FC, useState} from 'react'
import Input from '../general/inputs/input';
import Link from 'next/link';
import Button from '../glassmorph/Button';
import UserService from '../../services/user'

interface SignupFormProps{
    changeForm:any
}

const SignupForm:FC<SignupFormProps> = ({
    changeForm
})=>
{
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const changeFirstname=(event:any)=>{
        setFirstname(event.target.value)
    }

    const changeLastname=(event:any)=>{
        setLastname(event.target.value)
    }

    const changeUsername=(event:any)=>{
        setUsername(event.target.value)
    }

    const changeEmail=(event:any)=>{
        setEmail(event.target.value)
    }

    const changePassword=(event:any)=>{
        setPassword(event.target.value)
    }

    const signupUserHandler = (event:any)=>{
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
            username:username,
            firstname:firstname,
            lastname:lastname,
        }
          console.log("signup")
          UserService
          .CreateUser(userObject)
          .then(response => {
            changeForm();
          })
        }

        const handleLoginClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
            event.preventDefault();
            changeForm();
          };
    


    return(
        <form className='h-full flex flex-col justify-center items-center'>
            <div className='text-blue-700 font-poppins text-2xl tracking-widest'>Sign Up</div>
            <input type="text" placeholder='firstname'value={firstname} onChange={changeFirstname} className='input-text m-3'/>
            <input type="text" placeholder='lastname'value={lastname} onChange={changeLastname} className='input-text m-3'/>
            <input type="text" placeholder='email'value={email} onChange={changeEmail} className='input-text m-3'/>
            <input type="text" placeholder='username'value={username} onChange={changeUsername} className='input-text m-3'/>
            <input type="password" placeholder='password' value={password} onChange={changePassword} className='input-text m-3'/>
            <Button onClick={signupUserHandler}  label='Sign Up'/>
            <p className='ml-48' onClick={handleLoginClick}>Schon einen Account?</p>
            
          </form>
    )
}


export default SignupForm;