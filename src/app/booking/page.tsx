"use client"

import DateReserve from "@/components/DateReserve";
import { TextField, Select, MenuItem, Button } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking () {

  const dispatch = useDispatch<AppDispatch>();

  const [nameLastname, setNameLastname] = useState<string | null>(null);
  const [tel, setTel] = useState<string | null>(null);
  const [venue, setVenue] = useState<string>("Bloom");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const makeBooking = () => {
    if (nameLastname && tel && venue && bookDate) {
      const item: BookingItem = {
        nameLastname: nameLastname,
        tel: tel,
        venue: venue,
        bookDate: dayjs(bookDate).format("YYYY/MM/DD")
      }

      dispatch(addBooking(item));
    }
  }

  return (
    <div className="m-5">
      <div className="text-center text-2xl font-bold">Venue Booking</div>
      
      <div className="flex flex-row justify-evenly mt-10" onSubmit={makeBooking}>
        <TextField variant="standard" id="nameLastname" name="Name-Lastname" label="Name-Lastname" onChange={(e) => setNameLastname(e.target.value)}/>

        <TextField variant="standard" id="tel" name="Contact-Number" label="Contact-Number" onChange={(e) => setTel(e.target.value)}/>

        <Select variant="standard" id="venue" name="venue" className="w-[200px]" defaultValue={"Bloom"} onChange={(e) => setVenue(e.target.value)}>
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

        <DateReserve onDateChange={(value:Dayjs) => setBookDate(value)}/>
        
        <Button variant="contained" onClick={() => {makeBooking();}}>Book Venue</Button>
      </div>
    </div>
  );
}