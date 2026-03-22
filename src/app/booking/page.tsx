"use client"

import DateReserve from "@/components/DateReserve";
import { Button } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking as addBookingRedux } from "@/redux/features/bookSlice"; 
import addBookingAPI from "@/libs/addBooking"; 
import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Booking() {
  const searchParams = useSearchParams();
  const campgroundId = searchParams.get("campground");
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const makeBooking = async () => {
    if (!bookDate || !campgroundId || !session?.user?.token) {
      alert("Please select Campground and Booking Date")
      
      return;
    }
    
    try {
      const res = await addBookingAPI(
        campgroundId,
        dayjs(bookDate).format('YYYY-MM-DD'),
        session.user.token
      );

      if (res.success) {
        dispatch(addBookingRedux(res.data));
        
        alert("Booking Successfully")
        router.push('/mybooking');
      }

    } catch (err) {
      alert("You can only book 3 Booking")

      console.error("Booking failed:", err);
    }
  };

  return (
    <div className="m-5">
      <div className="text-center text-2xl font-bold">
        Booking Campground
      </div>

      <div className="text-center mt-5">
        Campground ID: {campgroundId}
      </div>

      <div className="flex flex-row justify-center mt-10 gap-5">
        <DateReserve value={bookDate} onDateChange={(value: Dayjs) => setBookDate(value)} />

        <Button variant="contained" onClick={makeBooking}>
          Book
        </Button>
      </div>
    </div>
  );
}