import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface"; // เช็ค path ให้ตรงกับโปรเจกต์คุณด้วยนะครับ

type BookState = {
  bookItems: BookingItem[];
}

const initialState: BookState = { bookItems: [] }

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {

    setBookings: (state, action: PayloadAction<BookingItem[]>) => {
      state.bookItems = action.payload;
    },

    addBooking: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems.push(action.payload);
    },

    removeBooking: (state, action: PayloadAction<string>) => {
      state.bookItems = state.bookItems.filter(
        (obj) => obj._id !== action.payload
      );
    }
  }
})

export const { setBookings, addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;