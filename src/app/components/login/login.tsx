

import {FC} from 'react'
import Input from '../general/input';
import Link from 'next/link';

interface LoginProps{}

const Login:FC<LoginProps> = ({})=>
{
   
    return(
        <form className='h-full flex flex-col justify-center items-center'>
            <div className='text-blue-700 font-poppins text-2xl tracking-widest'>Login</div>
            <input type="text" placeholder='username' className='input-text m-3'/>
            <input type="password" placeholder='password' className='input-text m-3'/>
            <input type="Submit" className='cursor-pointer font-poppins rounded-full m-3 px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
            <div>
                <Link className='ml-48' href='#'>Noch keinen Account?</Link>
                <Link className='ml-48' href='#'>Passwort vergessen?</Link>
            </div>
          </form>
    )
}

export default Login;