"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";

const DeleteBookingButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    // setBookings(bookings.filter((b) => b._id !== id));
    const data = await res.json();
    // console.log(data);
    router.refresh();
  };
  return (
    <>
      <button
        onClick={() => handleDelete(id)}
        className="p-2 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer transition"
      >
        <FaTrash />
      </button>
    </>
  );
};

export default DeleteBookingButton;
