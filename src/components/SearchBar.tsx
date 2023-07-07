"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function SearchBar() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  function handleFind() {
    if (location.trim() === '') return
    router.push(`../search?city=${location}`)
  }

  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center text-gray-700">
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 text-white"
        onClick={handleFind}
      >
        Lets go
      </button>
    </div>
  );
}
