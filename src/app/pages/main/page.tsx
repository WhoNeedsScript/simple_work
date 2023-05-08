'use client'
import { Inter } from 'next/font/google'
import Container from '@/app/components/glassmorph/Container'
import ClientOnly from '@/app/components/general/ClientOnly'
import Navbar from '@/app/components/navbar/Navbar'
import Logo from '@/app/components/navbar/Logo'
import MainDashboard from '@/app/components/main/MainDashboard'
import { useDispatch } from 'react-redux'
import { selectUser, updateCompanies, updateUser } from '@/app/store/features/userSlice'
import taxOffice from '@/app/services/taxOffice'
import { deleteTaxOffice } from '@/app/store/features/taxOfficeSlice'
import { useEffect } from 'react'
import CompanyService  from '@/app/services/company'
import { User } from '@/app/types/user.d'
import { store } from '@/app/store/store'
import Modal from '@/app/components/general/modal/Modal'



const inter = Inter({ subsets: ['latin'] })
export default function MainPage() {
  const dispatch= useDispatch();
  const user: User = selectUser(store.getState());

  useEffect(() => {
    CompanyService
    .GetCompaniesByUserUUID(user.uuid!)
        .then(response => {
          console.log(response)
            dispatch(updateCompanies(response))
        })
  }, []);

  return (
    <main>
      <div className="flex justify-between min-h-full">
        <Navbar>
          <Logo/>
        </Navbar>
        <ClientOnly>
        <Modal isOpen />
          <div className='m-10  flex-grow text-center'>
            <Container>        
              <MainDashboard/>
            </Container>
          </div>
        </ClientOnly>
      </div>
    </main>
  )
}
