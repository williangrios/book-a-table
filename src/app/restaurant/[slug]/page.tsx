import RestaurantDescription from "@/components/RestaurantDescription";
import RestaurantHeader from "@/components/RestaurantHeader";
import RestaurantImages from "@/components/RestaurantImages";
import RestaurantNavBar from "@/components/RestaurantNavBar";
import RestaurantRating from "@/components/RestaurantRating";
import RestaurantReservation from "@/components/RestaurantReservation";
import RestaurantReviews from "@/components/RestaurantReviews";
import RestaurantTitle from "@/components/RestaurantTitle";
import React from "react";

export default function Restaurant() { 

  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <RestaurantTitle />
          <RestaurantRating />
          <RestaurantDescription />
          <RestaurantImages />
          <RestaurantImages />
          <RestaurantReviews />
        </div>
        <RestaurantReservation />
    </>
  );
}
