"use client";
import MyBookingsTable from "@/componets/table/MyBookingsTable";
import React from "react";
import { useState, useEffect } from "react";
const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await fetch("http://localhost:3000/api/service");
      const data = await res.json();
      setBookings(data);
    };
    fetchBookings();
  }, []);
  return (
    <div>
      <MyBookingsTable bookings={bookings} />
    </div>
  );
};

export default MyBookingsPage;
