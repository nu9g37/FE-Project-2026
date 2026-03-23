'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve ({onDateChange,value} : {onDateChange:Function,value:Dayjs | null}) {
  
  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <DatePicker 
        value={value} 
        onChange={(newValue) => onDateChange(newValue)}
        disablePast
      />
    </LocalizationProvider>
  );
}