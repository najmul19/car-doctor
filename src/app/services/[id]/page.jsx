import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div className="w-[1140px] mx-auto">
      <section className="flex justify-center">
        <figure className="relative  ">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1137}
            height={300}
            alt="banner"
          ></Image>
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
            <div className="w-full h-full font-bold text-2xl flex items-center ps-16">
              <div>
                <h1 className="text-white">Service Details</h1>
              </div>
            </div>
          </div>
        </figure>
      </section>
      <section className="grid grid-cols-12 mt-5">
        <div className="mx-auto col-span-9">
          <Image
            src={data.img}
            width={900}
            height={280}
            alt={data.title}
          ></Image>
        </div>
        <div className="ms-4 col-span-3 ">
          <Link className=" " href={`/checkout/${data._id}`}>
            <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 w-full">checkout</button>
          </Link>
          <h1 className="font-bold text-center text-2xl mt-2">
            Price: $ {data.price}
          </h1>
        </div>
      </section>
      {p.id}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default ServiceDetailsPage;
