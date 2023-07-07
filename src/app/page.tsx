import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import RestaurantCard from '@/components/RestaurantCard'
import { PrismaClient, Cuisine, Location, PRICE, Review } from '@prisma/client'

export interface RestaurantCardType{
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[]
}

const prisma = new PrismaClient()
async function fetchRestaurants(): Promise<RestaurantCardType[]>{
  const restaurants = await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
      reviews: true
    }
  });
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </div>
    </main>
  )
}
