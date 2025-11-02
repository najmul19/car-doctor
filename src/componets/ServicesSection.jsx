import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesSection = async () => {
  //   const res = await fetch("/services.json");
  //   const data = res.json();
  const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className=" grid grid-cols-12 ">
      {data.map((item) => {
        return (
          <div
            key={item._id}
            className="mx-auto col-span-12 md:col-span-6 lg:col-span-4"
          >
            {/* {JSON.stringify(data)} */}
            <figure className="w-full h-3/4 flex justify-center items-center">
              <Image src={item.img} width={314} height={208} alt={item.title} />
            </figure>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
              <div>
                <Link className="text-orange-500" href={`/services/${item._id}`}>--</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesSection;
