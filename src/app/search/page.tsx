import SearchHeader from "@/components/SearchHeader";
import SearchRestaurandCard from "@/components/SearchRestaurandCard";
import SearchSideBar from "@/components/SearchSideBar";
import { PRICE, PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient()

interface SearchParams {
   city?: string, cuisine?: string, price?: PRICE 
}

async function fetchRestaurants(searchParams: SearchParams) {
  let where : any = {}
  if(searchParams.city){  
    const location = {
      name:{
        equals: searchParams.city.toLowerCase()
      }
    }
    where.location = location
  }
  
  if(searchParams.cuisine){  
    const cuisine = {
      name:{
        equals: searchParams.cuisine.toLowerCase()
      }
    }
    where.cuisine = cuisine
  }
  
  if(searchParams.price){
    const price = {
      equals: searchParams.price
    }
    where.price = price;
  }

  const selectFields = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true
  }

  const restaurants = await prisma.restaurant.findMany({
    where,
    select: selectFields
  })

  if (!restaurants) throw new Error()
  return restaurants;
}

async function fetchLocations(){
  return prisma.location.findMany()
}

async function fetchCuisines(){
  return prisma.cuisine.findMany()
}

export default async function Search({searchParams} : {searchParams: SearchParams}) {
  const restaurants = await fetchRestaurants(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
        {restaurants.length.toString()}
        <div className="w-5/6">
          {
            restaurants.length !== 0 ? (
              restaurants.map((restaurant) => (<>
                <SearchRestaurandCard key={restaurant.id} restaurant={restaurant} />
              </>
              )))
              : (<>
                <span className="text-gray-700">Sorry, we found no restaurant in this area</span>
              </>
              )
          }
        </div>
      </div>
    </>
  );
}
