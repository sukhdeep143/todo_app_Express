"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";


function SignUp() {
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
   try {
    const response = await axios.post("http://localhost:5000/register", formData);
    console.log(response.data);

    // Show success message
    setMessage("✅ User created successfully!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      password: "",
    });

  } catch (error) {
    console.error("Error creating user:", error);
    setMessage("❌ Error: Could not create user.");
  }
};

  return (
    <div className="rounded-2xl bg-slate-200 flex items-center justify-center">
      <form
        action=""
        onSubmit={onSubmitForm}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-red-700 text-center">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600  text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>

        {message && (
  <p className="text-center text-green-600 font-semibold mb-4">{message}</p>
)}
      </form>
    </div>
  );
}

export default SignUp;
