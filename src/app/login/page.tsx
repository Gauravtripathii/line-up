"use client";

import "./login.css";
import Link from "next/link";

export default function Login() {
  const loginHandler = () => {}
  return (
    <section className="h-full flex items-center justify-center">
      <div className="form-container p-10 rounded-2xl w-1/3">
        <h1 className="font-bold text-3xl mb-6">Log into your account</h1>
        <p>
          <input type="email" placeholder="Email or Username" className="mb-5 p-2 w-full rounded" />
        </p>
        <p>
          <input type="password" placeholder="Password" className="mb-7 p-2 w-full rounded" />
        </p>
        <p>
          <button onClick={loginHandler} className="border-2 border-red-500 rounded bg-red-500 text-white p-2 w-full font-bold text-xl hover:bg-inherit hover:text-red-500">Login</button>
        </p>
        <p className="flex justify-between">
          <span>Don't have an account? <Link href='/register' className="underline">Signup</Link></span>
          <span><Link href='/login' className="underline">Forgot Password?</Link></span>
        </p>
      </div>
    </section>
  );
}
