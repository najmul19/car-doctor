"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  };
  useEffect(() => {
    if (session?.status=="authenticated") {
      router.push("/");
      toast.success("Successfully Loged In")
    }
  }, [session?.status]);
  return (
    <div className="flex justify-center space-x-6 text-2xl">
      <p
        onClick={() => handleSocialLogin("facebook")}
        className="hover:scale-110 text-blue-500 transition"
      >
        <FaFacebook />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="hover:scale-110 text-gray-200 transition"
      >
        <FaGithub />
      </p>
      <p
        onClick={() => handleSocialLogin("google")}
        className="hover:scale-110 text-red-500 transition"
      >
        <FaGoogle />
      </p>
    </div>
  );
};

export default SocialLogin;
