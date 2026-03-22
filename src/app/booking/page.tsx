"use client"

import DateReserve from "@/components/DateReserve";
import { Button } from "@mui/material"; // ลบตัวที่ไม่ได้ใช้ออก
import { useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
// Import Redux Action (ตั้งชื่อหลบ API)
import { addBooking as addBookingRedux } from "@/redux/features/bookSlice"; 
// Import API 
import addBookingAPI from "@/libs/addBooking"; 
import { useSearchParams, useRouter } from "next/navigation"; // เพิ่ม useRouter
import { useSession } from "next-auth/react";

export default function Booking() {
  const searchParams = useSearchParams();
  const campgroundId = searchParams.get("campground");
  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); // ไว้สำหรับเปลี่ยนหน้าหลังจากจองเสร็จ

  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const makeBooking = async () => {
    if (!bookDate || !campgroundId || !session?.user?.token) {
      alert("Please select Campground and Booking Date")
      
      return;
    }
    
    try {
      // 1. ส่งข้อมูลเข้า Database
      const res = await addBookingAPI(
        campgroundId,
        dayjs(bookDate).format('YYYY-MM-DD'),
        session.user.token
      );

      // 2. เช็คว่าสำเร็จไหม
      if (res.success) {
        // เอาข้อมูลใหม่ที่ได้จาก DB ยัดเข้า Redux
        dispatch(addBookingRedux(res.data));
        console.log("Booking success:", res);
        
        // แนะนำ: พอจองเสร็จควรพากลับไปหน้ารายการจอง
        alert("Booking Successfully")
        router.push('/mybooking'); // <- ถ้า path ไปหน้ารายการจองชื่ออื่น แก้ได้เลยนะครับ
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
        <DateReserve onDateChange={(value: Dayjs) => setBookDate(value)} />

        <Button variant="contained" onClick={makeBooking}>
          Book
        </Button>
      </div>
    </div>
  );
}