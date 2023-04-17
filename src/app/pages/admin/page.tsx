'use client';

import Container from "@/app/components/glassmorph/Container";
import LegalFormDashboard from "@/app/components/legalForm/LegalFormDashboard";
import ClientOnly from "@/app/components/general/ClientOnly";
import Button from "@/app/components/glassmorph/Button";
import Navbar from "@/app/components/navbar/Navbar";
import { useState } from "react";

import DistrictCourtDashboard from "@/app/components/districtCourt/DistrictCourtDashboard";

export default function AdminPage() {
  const [dashboard, setDashboard] = useState("");

  const handleDashboardUpdate = (dashboard: string) => {
    setDashboard(dashboard);
  };

  return (
    <main>
      <ClientOnly>
      <div className='flex justify-between'>
        <Navbar>
          <Button text="Rechtsformen" onClick={() => handleDashboardUpdate("legalDashboard")} />
          <Button text="Amtsgericht" onClick={() => handleDashboardUpdate("districtCourtDashboard")} />
        </Navbar>
        <div className="m-10 flex-grow text-center">
          <Container height={100} width={100}>   
            {dashboard === "legalDashboard" ? (
              <LegalFormDashboard />
            ) : dashboard === "districtCourtDashboard" ? (
              <DistrictCourtDashboard />
            ) : (
              <div/>
            )}
          </Container>
        </div>
        </div>
      </ClientOnly>
    </main>
  );
}