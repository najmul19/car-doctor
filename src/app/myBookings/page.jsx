"use client";
import MyBookingsTable from "@/componets/table/MyBookingsTable";
import React from "react";
import { useState, useEffect } from "react";

// app/your-server-component.js
// import { headers } from 'next/headers';

// async function fetchInternalApi(path) {
//   // 1. headers() কে await করুন
//   const headersList = headers(); 

//   // 2. headersList থেকে একটি প্লেইন JavaScript অবজেক্ট তৈরি করুন
//   const headersObject = {};
  
//   // Headers অবজেক্টকে একটি অ্যারেতে কনভার্ট করুন এবং লুপের মাধ্যমে অবজেক্ট তৈরি করুন
//   // এর ফলে Symbol-এর সমস্যা দূর হবে।
//   for (const [key, value] of headersList.entries()) {
//     headersObject[key] = value;
//   }

//   // আপনার API-এর বেস URL
// //   const internalApiBaseUrl = 'http://localhost:3000/api'; // আপনার লোকাল API রুট বা এনভায়রনমেন্ট ভ্যারিয়েবল থেকে নিন
//   const internalApiBaseUrl = 'http://localhost:3000/api/service'; // আপনার লোকাল API রুট বা এনভায়রনমেন্ট ভ্যারিয়েবল থেকে নিন

//   const res = await fetch(`${internalApiBaseUrl}${path}`, {
//     method: 'GET',
//     // 3. নতুন তৈরি করা প্লেইন অবজেক্টটি ব্যবহার করুন
//     headers: headersObject, 
//     // অন্যান্য fetch অপশন (যেমন: cache: 'no-store' ইত্যাদি)
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
// const bookings = await fetchInternalApi()
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
