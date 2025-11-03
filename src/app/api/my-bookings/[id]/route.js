import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const p = await params;
  // console.log("id:    ", p)
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  const singliBookings = await bookingCollection.findOne(query);
  // console.log(singliBookings);
  revalidatePath("/myBookings")
  return NextResponse.json(singliBookings);
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  const body = await req.json();
  const filter = {
    $set: { ...body },
  };
  const option = {
    upsert: true,
  };
  const updatResponse = await bookingCollection.updateMany(
    query,
    filter,
    option
  );

  return NextResponse.json(updatResponse);
};
