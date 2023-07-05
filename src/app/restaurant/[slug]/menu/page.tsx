import RestaurantHeader from "@/components/RestaurantHeader";
import RestaurantMenu from "@/components/RestaurantMenu";
import RestaurantNavBar from "@/components/RestaurantNavBar";
import React from "react";

export const metadata = {
  title: 'Os melhores pratos estão aqui',
  description: 'Created by Willian Rios',
}

export default function Menu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <RestaurantMenu />
      </div>
    </>
  );
}
