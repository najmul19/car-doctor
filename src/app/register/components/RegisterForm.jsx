"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/app/login/componets/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    toast.loading("Submitting...", { id: "register" });

    const response = await registerUser({ name, email, password });

    toast.dismiss("register");

    if (response.success) {
      toast.success(response.message);
      router.push("/");
      form.reset();
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-gray-500/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-400">
        Car Doctor – Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 text-white"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full bg-transparent border border-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none placeholder-gray-300 text-white"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 hover:shadow-orange-400/50 hover:shadow-lg transition"
        >
          Register
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-600" />
        <span className="px-3 text-gray-400 text-sm">or login with</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Social Login Buttons */}
      <SocialLogin></SocialLogin>

      {/* Login Link */}
      <p className="text-center text-gray-300 text-sm mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
