"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    toast("submiting......");
    // const payload = { email, password };
    // console.log(payload);
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Loged In Successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("Failed to Log In!");
      }
    } catch (error) {
      //   console.log(error);
      toast.error("Failed to Log In!");
    }
  };
  return (
    <div className="relative bg-white/10 backdrop-blur-lg border border-gray-500/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-400">
        Car Doctor – Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 hover:shadow-orange-400/50 hover:shadow-lg transition"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-gray-600" />
        <span className="px-3 text-gray-400 text-sm">or login with</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex justify-center space-x-6 text-2xl">
        <button className="hover:scale-110 text-blue-500 transition">
          <FaFacebook />
        </button>
        <button className="hover:scale-110 text-gray-200 transition">
          <FaGithub />
        </button>
        <button className="hover:scale-110 text-red-500 transition">
          <FaGoogle />
        </button>
      </div>

      {/* Register Link */}
      <p className="text-center text-gray-300 text-sm mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-orange-400 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
