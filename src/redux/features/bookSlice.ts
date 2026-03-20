import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
  bookItems: BookingItem[];
}

const initialState:BookState = { bookItems:[] }

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action:PayloadAction<BookingItem>) => {
      const newState = state.bookItems.filter( (obj) => {
        return (
          (obj.campground != action.payload.campground) ||
          (obj.bookingDate != action.payload.bookingDate)
        )
      })
      
      newState.push(action.payload)

      state.bookItems = newState;
    },
    removeBooking: (state, action:PayloadAction<BookingItem>) => {

      const remainItems = state.bookItems.filter( (obj) => {

        return ( (obj.user != action.payload.user) )
         || (obj.campground != action.payload.campground) 
         || (obj.bookingDate != action.payload.bookingDate) 
      })

      state.bookItems = remainItems
    }
  }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer