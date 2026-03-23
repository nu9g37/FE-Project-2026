"use client";

import { useEffect, useState } from "react";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setBookings, updateBooking as updateBookingSlice } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interface";
import BookingButton from "./BookingButton";
import DateReserve from "./DateReserve";
import { Dayjs } from "dayjs";
import updateBooking from "@/libs/updateBooking";

type Props = {
  initialData: BookingItem[];
  token: string;
};

export default function BookingList({ initialData, token }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const bookings = useAppSelector((state) => state.bookSlice.bookItems);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDate, setEditDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (initialData) {
      dispatch(setBookings(initialData));
    }
  }, [initialData, dispatch]);

  const handleSave = async (id: string) => {
    if (!editDate) return;

    try {
      const formattedDate = editDate.format('YYYY-MM-DD');
      await updateBooking(id, formattedDate, token);

      dispatch(updateBookingSlice({ _id: id, bookingDate: formattedDate }));

      alert("Update Booking Successfully");

      setEditingId(null);
      setEditDate(null);
    } catch (error) {
      alert("Failed to update booking");

      console.error("Failed to update booking", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {
      bookings.length ?
      bookings.map((item) => (
        <div key={item._id} className="bg-emerald-600 rounded-xl p-5 shadow-md shadow-black">
          <div className="text-xl font-semibold">{item.campground.name}</div>
          <div className="text-sm text-gray-300 mb-3">{item.campground.province}</div>
          <div className="text-sm space-y-1">
            <div><span className="font-medium">User:</span> {item.user.name}</div>
            <div><span className="font-medium">Campground Tel.</span> {item.campground.tel}</div>
          </div>

          <div className="border-t border-black my-3"></div>

          <div className="text-sm">
            {editingId === item._id ? (
              <div className="my-2 p-2  rounded">
                <DateReserve value={editDate} onDateChange={(value: Dayjs) => setEditDate(value)} />
              </div>
            ) : (
              <div>Booking: {new Date(item.bookingDate).toLocaleDateString("th-TH")}</div>
            )}
            <div>Created: {new Date(item.createAt).toLocaleDateString("th-TH")}</div>
          </div>

          <BookingButton
            id={item._id}
            token={token}
            isEditing={editingId === item._id}
            onEdit={() => {
              setEditingId(item._id);
              import('dayjs').then(dayjs => setEditDate(dayjs.default(item.bookingDate))); 
            }}
            onCancel={() => {
              setEditingId(null);
              setEditDate(null);
            }}
            onSave={() => handleSave(item._id)}
          />
        </div>
      )): 
        <div className="bg-emerald-600 rounded-xl p-5 shadow-md text-lg font-semibold text-center">
          No Campground Booking
        </div>
    }
    </div>
  );
}