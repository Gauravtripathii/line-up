"use client";

import "./register.css";
import Link from "next/link";

export default function Register() {
  const signupHandler = () => {}
  return (
    <section className="h-full flex items-center justify-center">
      <div className="form-container p-10 rounded-2xl w-1/3">
        <h1 className="font-bold text-3xl mb-6">Create a new account</h1>
        <p>
          <input type="email" placeholder="Email" className="mb-5 p-2 w-full rounded" />
        </p>
        <p>
          <input type="text" placeholder="Username" className="mb-5 p-2 w-full rounded" />
        </p>
        <p>
          <input type="password" placeholder="Password" className="mb-7 p-2 w-full rounded" />
        </p>
        <p>
          <button onClick={signupHandler} className="border-2 border-red-500 rounded bg-red-500 text-white p-2 w-full font-bold text-xl hover:bg-inherit hover:text-red-500">Signup</button>
        </p>
        <p>
          <span>Already have an account? <Link href='/login' className="underline">Login</Link></span>
        </p>
      </div>
    </section>
  );
}
