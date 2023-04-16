import { Inter } from 'next/font/google'
import Container from '@/app/components/glassmorph/Container'
import ClientOnly from '@/app/components/general/ClientOnly'
import Login from '@/app/components/login/Login'
import Navbar from '@/app/components/navbar/Navbar'
import CompanyForm from '@/app/components/company/Create/CompanyGeneralInformations'
import CompanyInformations from '@/app/components/company/Create/CompanyInformation'
import Logo from '@/app/components/navbar/Logo'


const inter = Inter({ subsets: ['latin'] })
export default function MainPage() {
  

  return (
    <main>
      <div className="flex justify-between">
        <Navbar>
          <Logo/>
        </Navbar>
        <ClientOnly>
          <div className='m-10 flex-grow text-center'>
            <Container height={46} width={100}>        
              <CompanyInformations/>
            </Container>
          </div>
        </ClientOnly>
      </div>
    </main>
  )
}
