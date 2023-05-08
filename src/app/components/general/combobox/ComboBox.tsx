"use client";
import React, { useEffect } from "react";
import { FC, use, useState } from "react";
import { InputActionMeta } from "react-select/dist/declarations/src";
import Select from "react-select";
import Option from "react-select/dist/declarations/src/components/Option";

interface OptionType {
  label: string;
  value: string;
}

interface ComboboxProps {
  data: OptionType[];
  onChange: any;
  placeholder?: string;
  selected?: any;
}

const ComboBox: FC<ComboboxProps> = ({
  data,
  onChange,
  placeholder,
  selected,
}) => {
    console.log(selected)
  return (
    <div className="w-77">
      <Select
        defaultValue={
        
          selected !== undefined
            ? selected.value !== ""
              ? selected
              : undefined
            : undefined
        }
        options={data}
        getOptionLabel={(data: OptionType) => data.label}
        getOptionValue={(data: OptionType) => data.value}
        onChange={onChange}
        isSearchable={true}
        isClearable={false}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ComboBox;
