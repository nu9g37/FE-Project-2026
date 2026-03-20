"use client"

import { useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { removeBooking } from "@/redux/features/bookSlice"
import { Button } from "@mui/material"

export default function BookingList() {

  const bookingItem = useAppSelector((state) => state.bookSlice);

  const dispatch = useDispatch<AppDispatch>();
  
  return (
    <div className="flex flex-row flex-wrap justify-center mt-5">
      {
        bookingItem.bookItems.length?
        bookingItem.bookItems.map((bookItem) => (
          <div key={bookItem.bookDate + " " + bookItem.venue}
            className="bg-slate-200 w-fit h-fit m-5 p-5 rounded-lg shadow-lg"
          >
            <div>Name-Lastname: {bookItem.nameLastname}</div>
            <div>Tel. {bookItem.tel}</div>
            <div>Venue: {bookItem.venue}</div>
            <div>Date: {bookItem.bookDate}</div>
            <Button variant="contained" onClick={() => dispatch(removeBooking(bookItem))}>Remove Booking</Button>
          </div>
        )) :
        <div className="text-2xl font-semibold">No Venue Booking</div>
      }
    </div>
  )
}