"use client";

import { useSession } from "next-auth/react";
import React from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ data }) => {
  const { data: session } = useSession();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const dueAmount = form.dueAmount.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const checkoutPayload = {
      customerName: name,
      email,
      date,
      // dueAmount,
      phone,
      address,

      // extra info

      service_id: data._id,
      service_name: data.title,
      service_image: data.img,
      service_price: dueAmount,
    };

    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: JSON.stringify(checkoutPayload),
    });
    const postedResponse = await res.json();
    // console.log("postedResponse : ", postedResponse);
    toast.success("Form submitted");
    // form.reset();
  };

  return (
    <div className=" text-black relative bg-white/10 backdrop-blur-lg border border-gray-500/30 shadow-2xl rounded-2xl p-8 w-full max-w-5xl  mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">
        Car Doctor – Checkout : {data?.title}
      </h2>

      {/* 2-column responsive form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            defaultValue={session?.user?.name}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 "
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            defaultValue={session?.user?.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 "
            required
          />
        </div>

        {/* Due Amount */}
        <div>
          <label className="block font-medium mb-1">Due Amount</label>
          <input
            type="number"
            readOnly
            defaultValue={data?.price}
            name="dueAmount"
            placeholder="Enter due amount"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 "
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none "
            required
          />
        </div>
        {/* Phone Number */}
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 "
            required
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Present Address</label>
          <textarea
            name="address"
            placeholder="Enter your present address"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 "
            rows="3"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-500  font-semibold py-2 rounded-lg hover:bg-orange-600 hover:shadow-orange-400/50 hover:shadow-lg transition"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
