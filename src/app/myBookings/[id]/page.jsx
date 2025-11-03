import BookingUpdateForm from "@/componets/form/BookingUpdateForm";
import React from "react";

const UpdateBookingPage = async ({ params }) => {
  const p =await params;
  const res = await fetch(`http://localhost:3000/api/my-bookings/${p.id}`);
    const data = await res.json();
//   const data = {};
//   console.log("faaaaaaaaaa: ", res)
  return (
    <div>
      <BookingUpdateForm data={data} />
    </div>
  );
};

export default UpdateBookingPage;
