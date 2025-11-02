"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  //   console.log(payload);
  const userCollection = dbConnect(collectionNamesObj.userCollection);
  //   validation
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await userCollection.findOne({ email: payload.email });
  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    payload.password = hashPassword;
    const result = await userCollection.insertOne(payload);
    // const { acknowledged, insertedId } = result;
    result.insertedId = result.insertedId.toString();
    return result;
  } else {
    return null;
  }
};
