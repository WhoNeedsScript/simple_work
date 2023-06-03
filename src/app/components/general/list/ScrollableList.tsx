'use client'
import React from "react";

interface ListItemProps{
    children:any,
}

const ScrollableList: React.FC<ListItemProps> = ({
    children 
}) => {
  return (
    <div className="overflow-y-auto">
      <ul className="list-none">
        {children}
      </ul>
    </div>
  );
};

export default ScrollableList;