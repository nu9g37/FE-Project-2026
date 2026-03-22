import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

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
    },

    updateBooking: (state, action: PayloadAction<{ _id: string; bookingDate: string }>) => {
      const index = state.bookItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index !== -1) {
        state.bookItems[index].bookingDate = action.payload.bookingDate;
      }
    }
  }
})

export const { setBookings, addBooking, removeBooking, updateBooking } = bookSlice.actions;
export default bookSlice.reducer;