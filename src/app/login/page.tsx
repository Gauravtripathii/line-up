"use client";

import "./login.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/auth/login", payload);
      toast.success("login succesfull!");
      setPayload({
        email: "",
        password: "",
      });
    } catch (error: any) {
      toast.error("login failed", error.message);
    }
  };
  return (
    <section className="h-full flex items-center justify-center">
      <div className="form-container p-10 rounded-2xl w-1/3">
        <h1 className="font-bold text-3xl mb-6">Log into your account</h1>
        <p>
          <input
            type="email"
            placeholder="Email or Username"
            className="mb-5 p-2 w-full rounded"
            value={payload.email}
            onChange={e => setPayload({...payload, email: e.target.value})}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            className="mb-7 p-2 w-full rounded"
            value={payload.password}
            onChange={e => setPayload({...payload, password: e.target.value})}
          />
        </p>
        <p>
          <button
            onClick={loginHandler}
            className="border-2 border-red-500 rounded bg-red-500 text-white p-2 w-full font-bold text-xl hover:bg-inherit hover:text-red-500"
          >
            Login
          </button>
        </p>
        <p className="flex justify-between">
          <span>
            Don't have an account?{" "}
            <Link href="/register" className="underline">
              Signup
            </Link>
          </span>
          <span>
            <Link href="/login" className="underline">
              Forgot Password?
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
