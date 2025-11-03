
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions); // ✅ this is correct in App Router

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const email = session.user.email;
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const result = await bookingCollection.find({ email }).toArray();
//   console.log(session);

  return NextResponse.json(result);
};

export const POST = async (req) => {
  const body = await req.json();
  //   console.log(body);
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const result = bookingCollection.insertOne(body);

  return NextResponse.json(result);
};
