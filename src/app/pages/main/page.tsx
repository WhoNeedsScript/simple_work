'use client'
import { Inter } from 'next/font/google'
import Container from '@/app/components/glassmorph/Container'
import ClientOnly from '@/app/components/general/ClientOnly'
import Navbar from '@/app/components/general/sidebar/Sidebar'
import Logo from '@/app/components/general/sidebar/Logo'
import MainDashboard from '@/app/components/main/MainDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, updateCompanies, updateUser } from '@/app/store/features/userSlice'
import taxOffice from '@/app/services/taxOffice'
import { deleteTaxOffice } from '@/app/store/features/taxOfficeSlice'
import { useEffect } from 'react'
import CompanyService  from '@/app/services/company'
import { User } from '@/app/types/user.d'
import { RootState, store } from '@/app/store/store'
import Modal from '@/app/components/general/modal/Modal'
import CompanyInformations from '@/app/components/company/CompanyInformation'
import Sidebar from '@/app/components/general/sidebar/Sidebar'
import CreateCompanyModal from '@/app/components/general/modal/CreateCompanyModal'
import { updateIsOpen } from '@/app/store/views/createCompanyModel'



const inter = Inter({ subsets: ['latin'] })
export default function MainPage() {
  const dispatch= useDispatch();
  const user: User = selectUser(store.getState());
  const userCompanys = useSelector((state:RootState)=>state.userState.companies);
  useEffect(() => {
    CompanyService
    .GetCompaniesByUserUUID(user.uuid!)
        .then(response => {
          console.log(response)
            dispatch(updateCompanies(response))
        })
  }, []);

  if(userCompanys.length === 0)
  dispatch(updateIsOpen(true))

  return (
    <main className="Parent">
        <CreateCompanyModal/>
      <Logo/>
      <ClientOnly>
        <div className='flex flex-row'>
          <div className="w-1/4">
              <Sidebar>
                {"test"}
              </Sidebar>
            </div>
            <div className="w-3/4 items-center">
              <Container>        
                <MainDashboard/>
              </Container>
            </div>
          
        
      
  
          </div>
          
        </ClientOnly>
      
    </main>
  )
}
