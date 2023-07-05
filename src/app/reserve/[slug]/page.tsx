import ReserveForm from "@/components/ReserveForm";
import ReserveHeader from "@/components/ReserveHeader";
import React from "react";

export default function Reserve() {
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto text-gray-700">
          <ReserveHeader />
          <ReserveForm />
        </div>
      </div>
    </>
  );
}
