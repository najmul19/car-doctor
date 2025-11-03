import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  //   console.log(body);
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const result = bookingCollection.insertOne(body);

  return NextResponse.json(result);
};
