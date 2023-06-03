'use client';

import Container from "@/app/components/glassmorph/Container";
import LegalFormDashboard from "@/app/components/legalForm/LegalFormDashboard";
import ClientOnly from "@/app/components/general/ClientOnly";
import Button from "@/app/components/glassmorph/Button";

import { useState } from "react";

import TaxOfficeDashboard from "@/app/components/taxOffice/TaxOfficeDashboard";
import FederalStateDashboard from "@/app/components/federalState/FederalStateDashboard";
import OccupationCooperativeDashboard from "@/app/components/occupationCooperative/OccupationCooperativeDashboard";
import DistrictCourtDashboard from "@/app/components/districtCourt/DistrictCourtDashboard";
import Sidebar from "@/app/components/general/sidebar/Sidebar";

export default function AdminPage() {
  const [dashboard, setDashboard] = useState("");

  const handleDashboardUpdate = (dashboard: string) => {
    setDashboard(dashboard);
  };

  return (
    <main className="h-full ">
      <ClientOnly>
      <div className='flex h-full justify-between'>
     
        <Sidebar>
          <Button label="Rechtsformen" onClick={() => handleDashboardUpdate("legalDashboard")} />
          <Button label="Finanzamt" onClick={() => handleDashboardUpdate("taxOfficeDashboard")} />
          <Button label="Bundesländer" onClick={() => handleDashboardUpdate("federalStateDashboard")} />
          <Button label="Berufsgenossenschaften" onClick={() => handleDashboardUpdate("occupationCooperativeDashboard")} />
          <Button label="Amtsgericht" onClick={() => handleDashboardUpdate("districtCourtDashboard")} />
        </Sidebar>
       
        <div className="m-10 flex-grow text-center">
          <Container >   
            {dashboard === "legalDashboard" ? (
              <LegalFormDashboard />
            ) : dashboard === "taxOfficeDashboard" ? (
              <TaxOfficeDashboard />
            ) :dashboard === "federalStateDashboard" ? (
                <FederalStateDashboard />
            ) :dashboard === "occupationCooperativeDashboard" ?  (
                <OccupationCooperativeDashboard/>
            ) :dashboard === "districtCourtDashboard" ?  (
                  <DistrictCourtDashboard/>)
              :<div/>
              }
          </Container>
        </div>
        </div>
      </ClientOnly>
    </main>
  );
}