"use client";

import { useState } from "react";
import Loginpage from "../login/page";
import SignUp from "../SignUp/page";

export default function Home() {
  const [page, setPage] = useState("login");

  return (
    <div className="h-screen bg-gradient-to-br from-red-800 to-yellow-700 flex flex-col items-center justify-center p-6 space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => setPage("login")}
          className={`px-4 py-2 rounded font-semibold ${
            page === "login" ? "bg-white text-red-800" : "bg-gray-100"
          }`}
        >
          Login Page
        </button>
        <button
          onClick={() => setPage("signup")}
          className={`px-4 py-2 rounded font-semibold ${
            page === "signup" ? "bg-white text-red-800" : "bg-gray-100"
          }`}
        >
          Sign Up Page
        </button>
      </div>

      {/* Conditional rendering of forms */}
      <div className="w-full max-w-md">
        {page === "login" ? <Loginpage /> : <SignUp />}
      </div>
    </div>
  );
}
