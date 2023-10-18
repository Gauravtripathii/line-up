"use client";

import "./register.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const signupHandler = async () => {
    try {
      const response = await axios.post("/api/auth/register", data);
      console.log(response);
      setData({
        username: "",
        email: "",
        password: "",
      });
      toast.success("Signup Successfull!");
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <section className="h-full flex items-center justify-center">
      <div className="form-container p-10 rounded-2xl w-1/3">
        <h1 className="font-bold text-3xl mb-6">Create a new account</h1>
        <p>
          <input
            type="email"
            placeholder="Email"
            className="mb-5 p-2 w-full rounded"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Username"
            className="mb-5 p-2 w-full rounded"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Password"
            className="mb-7 p-2 w-full rounded"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </p>
        <p>
          <button
            onClick={signupHandler}
            className="border-2 border-red-500 rounded bg-red-500 text-white p-2 w-full font-bold text-xl hover:bg-inherit hover:text-red-500"
          >
            Signup
          </button>
        </p>
        <p>
          <span>
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
