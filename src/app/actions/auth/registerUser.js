"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNamesObj.userCollection);
  const { email, password } = payload;

  if (!email || !password) {
    return { success: false, message: "Email and password required" };
  }

  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const hashPassword = await bcrypt.hash(password, 10);
  payload.password = hashPassword;

  const result = await userCollection.insertOne(payload);
  result.insertedId = result.insertedId.toString();

  return { success: true, message: "User registered successfully", data: result };
};
