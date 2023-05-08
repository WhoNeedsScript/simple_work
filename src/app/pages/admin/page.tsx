'use client';

import Container from "@/app/components/glassmorph/Container";
import LegalFormDashboard from "@/app/components/legalForm/LegalFormDashboard";
import ClientOnly from "@/app/components/general/ClientOnly";
import Button from "@/app/components/glassmorph/Button";
import Navbar from "@/app/components/navbar/Navbar";
import { useState } from "react";

import TaxOfficeDashboard from "@/app/components/taxOffice/TaxOfficeDashboard";
import FederalStateDashboard from "@/app/components/federalState/FederalStateDashboard";
import OccupationCooperativeDashboard from "@/app/components/occupationCooperative/OccupationCooperativeDashboard";
import DistrictCourtDashboard from "@/app/components/districtCourt/DistrictCourtDashboard";

export default function AdminPage() {
  const [dashboard, setDashboard] = useState("");

  const handleDashboardUpdate = (dashboard: string) => {
    setDashboard(dashboard);
  };

  return (
    <main className="h-full ">
      <ClientOnly>
      <div className='flex justify-between relative'>
        <Navbar>
          <Button text="Rechtsformen" onClick={() => handleDashboardUpdate("legalDashboard")} />
          <Button text="Finanzamt" onClick={() => handleDashboardUpdate("taxOfficeDashboard")} />
          <Button text="Bundesländer" onClick={() => handleDashboardUpdate("federalStateDashboard")} />
          <Button text="Berufsgenossenschaften" onClick={() => handleDashboardUpdate("occupationCooperativeDashboard")} />
          <Button text="Amtsgericht" onClick={() => handleDashboardUpdate("districtCourtDashboard")} />
        </Navbar>
        <div className="m-10 flex-grow text-center">
          <Container height={100} width={100}>   
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