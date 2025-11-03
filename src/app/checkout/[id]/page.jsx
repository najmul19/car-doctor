import CheckoutForm from "@/componets/CheckoutForm";
import React from "react";

const CheckoutPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
