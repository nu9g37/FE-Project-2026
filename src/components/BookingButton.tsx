"use client";

import deleteBooking from "@/libs/deleteBooking";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

type Props = {
  id: string;
  token: string;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
};

export default function BookingButton({ id, token, isEditing, onEdit, onCancel, onSave }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = async () => {
    try {
      await deleteBooking(id, token);
      dispatch(removeBooking(id));
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  };

  if (isEditing) {
    return (
      <div className="flex justify-end gap-2 mt-4">
        <button 
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-end gap-2 mt-4">
      <button 
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        onClick={onEdit}
      >
        Edit
      </button>

      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}