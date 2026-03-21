"use client";

import { useEffect } from "react";
import { useAppSelector, AppDispatch } from "@/redux/store"; // เช็ค path ด้วยนะครับ
import { useDispatch } from "react-redux";
import { setBookings } from "@/redux/features/bookSlice"; // เช็ค path ด้วยนะครับ
import { BookingItem } from "../../interface";
import BookingButton from "./BookingButton";

type Props = {
  initialData: BookingItem[];
  token: string;
};

export default function BookingList({ initialData, token }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  
  // ดึงข้อมูลจาก Redux มาใช้แทน useState
  const bookings = useAppSelector((state) => state.bookSlice.bookItems);

  // เมื่อโหลด Component ครั้งแรก ให้นำ initialData จาก DB ไปทับใน Redux
  useEffect(() => {
    if (initialData) {
      dispatch(setBookings(initialData));
    }
  }, [initialData, dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {bookings.map((item) => (
        <div key={item._id} className="bg-sky-950 rounded-xl p-5 shadow-md">
          <div className="text-xl font-semibold">
            {item.campground.name}
          </div>
          <div className="text-sm text-gray-300 mb-3">
            {item.campground.province}
          </div>

          <div className="text-sm space-y-1">
            <div><span className="font-medium">User:</span> {item.user.name}</div>
            <div><span className="font-medium">Tel:</span> {item.campground.tel}</div>
          </div>

          <div className="border-t border-gray-600 my-3"></div>

          <div className="text-sm">
            <div>Booking: {new Date(item.bookingDate).toLocaleDateString("th-TH")}</div>
            <div>Created: {new Date(item.createAt).toLocaleDateString("th-TH")}</div>
          </div>

          {/* เอา onDelete ออก เพราะเราจะให้ปุ่มจัดการลบผ่าน Redux เองเลย */}
          <BookingButton
            id={item._id}
            token={token}
          />
        </div>
      ))}
    </div>
  );
}