import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  // console.log("id:    ", p)
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  const singliBookings = await bookingCollection.findOne(query);
  // console.log(singliBookings);
  return NextResponse.json(singliBookings);
};
