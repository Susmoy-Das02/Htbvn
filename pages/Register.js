import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section className="bg-[#FFECEF] pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg bg-[#372948] text-[#FFECEF] rounded-2xl">
          <h1 className="text-center text-2xl  text-[#FFECEF] sm:text-3xl pt-5">
            Create A New Account
          </h1>
          <form
            action=""
            className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
          >
            <div>
              <label for="UserName" className="text-sm font-medium">
                User Name
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="UserName"
                  className="w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm text-[#372948]"
                  placeholder="Enter User Name"
                />
              </div>
            </div>

            <div>
              <label for="PhoneNumber" className="text-sm font-medium">
                Phone Number
              </label>

              <div className="relative mt-1">
                <input
                  type="number"
                  id="PhoneNumber"
                  className="w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm text-[#372948]"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>

            <div>
              <label for="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm text-[#372948]"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label for="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-3 pr-12 text-sm shadow-sm text-[#372948]"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#CFF44E] px-5 py-3 text-lg font-medium text-[#372948] "
            >
              Register
            </button>

            <p className="text-center text-sm text-[#FFECEF]">
              Allready Registered?{" "}
              <Link className="underline" href="/Login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
