"use client";

import deleteBooking from "@/libs/deleteBooking";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

type Props = {
  id: string;
  token: string;
};

export default function BookingButton({ id, token }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    try {
      // 1. ลบจาก Database
      await deleteBooking(id, token);
      
      // 2. พอลบ DB สำเร็จ ค่อยสั่งลบออกจาก Redux เพื่อให้ UI อัปเดตทันที
      dispatch(removeBooking(id));
      
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  };

  return (
    <div className="flex justify-end gap-2 mt-4">
      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
        Edit
      </button>

      <button
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}