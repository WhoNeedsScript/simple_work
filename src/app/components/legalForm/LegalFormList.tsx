"use client";

import { FC, use, useEffect, useState } from "react";
import Input from "../general/inputs/input";
import Link from "next/link";
import Button from "../glassmorph/Button";
import LegalFormService from "../../services/legalForm";
import InputWithLable from "../general/inputs/InputWithLable";
import ScrollableList from "../general/list/ScrollableList";
import ListItem from "../general/list/ListItem";
import legalForm from "../../services/legalForm";
import { hasSubscribers } from "diagnostics_channel";
import LegalFormListItem from "./LegalFormListItem";
import { LegalForm } from "../../types/legalform.d";
import { useSelector } from "react-redux";

interface LegalFormListProps {

}

const LegalFormList: FC<LegalFormListProps> = ({
 
}) => {
  const legalForms = useSelector((state:any)=>state.legalFormState.legalForms)

  return (
    <ScrollableList
      children={
        legalForms !== undefined ? (
          legalForms.map((legalForm: any) => (
            <LegalFormListItem
              key={legalForm.uuid}
              id={legalForm.uuid!}
            />
          ))
        ) : (
          <div />
        )
      }
    />
  );
};

export default LegalFormList;
