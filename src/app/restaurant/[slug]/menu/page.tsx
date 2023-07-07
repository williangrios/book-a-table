import RestaurantMenu from "@/components/RestaurantMenu";
import RestaurantNavBar from "@/components/RestaurantNavBar";
import { PrismaClient } from "@prisma/client";
import React from "react";

export const metadata = {
  title: 'Os melhores pratos estão aqui',
  description: 'Created by Willian Rios',
}

const prisma = new PrismaClient();
async function fetchMenu(slug: string){
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items: true
    }
  })
  if (!restaurant) throw new Error()
  return restaurant.items
}

export default async function Menu({params}: {params: {slug: string}}) {
  const menu = await fetchMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <RestaurantMenu menu={menu}/>
      </div>
    </>
  );
}
