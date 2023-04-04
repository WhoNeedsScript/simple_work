import {FC} from 'react'
import Input from '../general/input';

interface LoginProps{}

const Login:FC<LoginProps> = ({})=>
{
    return(
        <div className="relative " >
            <div>
                <form>
                    <Input/>
                </form>
            </div>
           
        </div>
    )
}

export default Login;