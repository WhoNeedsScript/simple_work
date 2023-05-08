"use client";

import { FC, use, useEffect, useState } from "react";
import ScrollableList from "../general/list/ScrollableList";
import { useSelector } from "react-redux";
import OccupationCooperativeListItem from "./OccupationCooperativeListItem";

interface OccupationCooperativeListProps {

}

const OccupationCooperativeList: FC<OccupationCooperativeListProps> = ({
 
}) => {
  const OccupationCooperatives = useSelector((state:any)=>state.occupationCooperativeState.occupationCooperatives)

  return (
    <ScrollableList
      children={
        OccupationCooperatives !== undefined ? (
          OccupationCooperatives.map((occupationCooperative: any) => (
            <OccupationCooperativeListItem
              key={occupationCooperative.uuid}
              id={occupationCooperative.uuid!}
            />
          ))
        ) : (
          <div />
        )
      }
    />
  );
};

export default OccupationCooperativeList;
