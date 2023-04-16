import { Inter } from 'next/font/google'
import Container from '@/app/components/glassmorph/Container'
import ClientOnly from '@/app/components/general/ClientOnly'
import Login from '@/app/components/login/Login'


const inter = Inter({ subsets: ['latin'] })
export default function LoginPage() {
  

  return (
    <main
    >
      <ClientOnly>
      <div className='flex items-center justify-center h-screen'>
      <Container height={46} width={46}>        
        <Login/>
      </Container>
      </div>
      </ClientOnly>
      
    </main>
  )
}
