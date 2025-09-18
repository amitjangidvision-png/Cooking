import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col md:flex-row font-body">
      {/* Left side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white p-6">
        <img
          src="/logo.png"
          alt="logo"
          className="w-40 sm:w-52 md:w-72 lg:w-80 h-auto mx-auto md:mx-0 mb-12 sm:mb-16 md:mb-20 lg:mb-28"
        />
        <img
          src="/signup1.png"
          alt="decor"
          className="w-64 sm:w-80 md:w-[28rem] lg:w-[35rem] h-auto mx-auto"
        />
      </div>

      {/* Thin Divider (hidden on small screens) */}
      <div className="hidden md:block w-px bg-gray-200"></div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#043133] mb-8 text-center">
        Welcome to Jammy
        </h1>


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-9 text-[#4D5959]" id="Form">
          {/* Full Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("fullName")}
              className="w-full border border-gray-200 bg-gray-100 p-3 sm:p-4 rounded text-[#838383]"
            />
            <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your Email here"
              {...register("email")}
              className="w-full border border-gray-200 bg-gray-100 p-3 sm:p-4 rounded text-[#838383]"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div >
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
              className="w-full border border-gray-200 bg-gray-100 p-3 sm:p-4 rounded text-[#838383]"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
        </form>

        {/* Create Account Button */}
        <button
           type="submit"
           form="Form"
           className="w-full sm:w-2/3 md:w-1/2 bg-[#F7941E] text-white text-lg font-semibold py-3 rounded-md hover:bg-[#e38315] transition block mx-auto md:px-6 mt-12 mb-6"
           >
           Create Account
        </button>

        {/* Already have account */}
        <p className="text-sm text-center md:text-left block mx-auto">
          Already have an account?{" "}
          <Link to="/" className="text-[#F7941E] hover:underline">
            Log in
          </Link>
        </p>

        {/* OR divider */}
        <div className="my-6 text-center block mx-auto">
          <p className="font-medium text-lg">OR</p>
        </div>

        {/* Social buttons */}
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 border px-4 py-3 rounded w-full sm:w-100 hover:bg-gray-100">
            <img src="/google-logo.png" alt="Google" className="w-5 h-5" />
            Sign up with Google
          </button>

          <button className="flex items-center justify-center gap-2 border px-4 py-3 rounded w-full sm:w-100 hover:bg-gray-100">
            <img src="/facebook-logo.png" alt="Facebook" className="w-5 h-5" />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
