import RestaurantDescription from "@/components/RestaurantDescription";
import RestaurantImages from "@/components/RestaurantImages";
import RestaurantNavBar from "@/components/RestaurantNavBar";
import RestaurantRating from "@/components/RestaurantRating";
import RestaurantReservation from "@/components/RestaurantReservation";
import RestaurantReviews from "@/components/RestaurantReviews";
import RestaurantTitle from "@/components/RestaurantTitle";
import { PrismaClient, Review } from "@prisma/client";
import React from "react";

interface RestaurantProps{
  params:{
    slug: string;
  }
}

interface Restaurant{
  id: number,
  name: string,
  images: string[],
  description: string,
  slug: string,
  reviews: Review[]
}

const prisma = new PrismaClient;
async function fetchRestaurant (slug: string): Promise<Restaurant>{
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true
    }
  })
  if (!restaurant){
    throw new Error();
  }
  return restaurant
}

export default async  function Restaurant({params}: RestaurantProps) { 
  const restaurant = await fetchRestaurant(params.slug);
  
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar slug={restaurant.slug} />
          <RestaurantTitle name={restaurant.name} />
          <RestaurantRating reviews={restaurant.reviews} />
          <RestaurantDescription description={restaurant.description} />
          <RestaurantImages images={restaurant.images} name={restaurant.name}/>
          {/* <RestaurantImages /> */}
          <RestaurantReviews reviews={restaurant.reviews} />
        </div>
        <RestaurantReservation />
    </>
  );
}
