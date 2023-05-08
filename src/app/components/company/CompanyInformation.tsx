'use client';

import {FC, useState} from 'react'
import ClientOnly from '../general/ClientOnly';
import Container from '../glassmorph/Container';
import Sidebar from '../general/sidebar/Sidebar';
import CompanyGeneralInformations from './CompanyGeneralInformations';
import CompanyAdditionalInformations from './CompanyAdditionalInformations';
enum ResultType {
    FULL = "full",
    SEMI_FULL = "semi-full",
    ERROR = "error"
  }

interface CompanyGeneralInformationsProps{
    
}

const CompanyInformations:FC<CompanyGeneralInformationsProps> = ({
  
})=>
{
    const [textData,setTextData] = useState([
        {text:"Allgemein",color:"text-black"},
        {text:"Erweitert",color:"text-black"}
    ]);

   

    const [companyInformationsForm,setCompanyInformationsForm] = useState("general");

    const changeCompanyInformationsForm=(form:string) =>{
        setCompanyInformationsForm(form)
    }

    const changeTextData=(textResult:{name:string,result:ResultType})=>{
  
        let updatedText = textData.find((text: any) => text.text === textResult.name);
        
        const changedText = { 
            ...updatedText,
            color: textResult.result === ResultType.FULL 
                ? "text-green-500": textResult.result === ResultType.SEMI_FULL
                ? "text-yellow-500": textResult.result === ResultType.ERROR
                ? "text-red-500": "text-black"
        }
    console.log({changedText})

    setTextData(textData.map((textData:any) => textData.text !== changedText!.text ? textData : changedText))
   
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
      
        const companyObject = {
            name: name,
           
           
        }
          
         /* UserService
          .LoginUser(userObject)
          .then(response => {
        
            localStorage.setItem("userid", response);

          })*/
        };

        const handleSignupClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
          event.preventDefault();
         
        };

    return(
        <div>
            <ClientOnly>  
                <div className='m-10 flex-grow text-center'>
                        <div className='flex justify-between'>
                            <Sidebar text={textData}/>    
                            <div className='m-10 flex-grow text-center'>
                                <h1>Unternehmen Erstellen</h1>
                            <Container> 
                                {
                                    companyInformationsForm === "general"
                                    ?<CompanyGeneralInformations changeCompanyInformationsForm={()=>changeCompanyInformationsForm("additional")} changeTextData={changeTextData}/>
                                    : companyInformationsForm ==="additional"
                                    ?<CompanyAdditionalInformations/>
                                    :<div/>
                                }
                                 </Container>
                            </div>
                        </div>
                </div>
            </ClientOnly>
        </div>
    )
}


export default CompanyInformations;