"use client";

import { useState } from "react";

function Student({ name, course }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100 shadow-md max-w-sm">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{course}</p>
    </div>
  );
}

export default function Home() {
  const [message, setMessage] = useState("Hello!");

  return (
    <main className="p-8 max-w-md mx-auto">
      <Student name="Johan Louis Lopez" course="BSIT" />

      <button
        onClick={() => setMessage("Welcome to Next.js!")}
        className="mt-4 px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition"
      >
        Click Me
      </button>

      <p className="mt-3">{message}</p>
    </main>
  );
}
