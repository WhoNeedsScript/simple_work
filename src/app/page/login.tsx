import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Login from '../components/login/login'


const inter = Inter({ subsets: ['latin'] })

export default function LoginPage() {
  return (
    <>
        <section className='h-screen flex items-center justify-between'>
            <div className="container">
                <div className='relative'>
                    <div className='backdrop-blur-[10px] bg-white absolute top-0 left-0 w-full h-full rounded flex justify-center items-center p-16' >
                        <Login />
                    </div>
              
                </div>
                
            </div>
        </section>
      </>
  )
}
