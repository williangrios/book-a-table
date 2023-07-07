import React from 'react'
import Link from 'next/link'
import { Cuisine, Location, PRICE, Review } from '@prisma/client';
import Price from './Price';
import { calculateReviewAverage } from '@/app/utils/calculateReviewAverage';
import Stars from './Stars';

interface SearchRestaurandCardProps {
  restaurant: {
    id: number;
    slug: string;
    name: string;
    location: Location;
    cuisine: Cuisine;
    main_image: string;
    price: PRICE;
    reviews: Review[];
  }
}

export default function SearchRestaurandCard({ restaurant }: SearchRestaurandCardProps) {

  function renderRatingText() {
    const rating = calculateReviewAverage(restaurant.reviews);
    if (parseFloat(rating.toString()) >= 4) return "Awesome"
    else if (parseFloat(rating.toString()) >= 3) return "Good"
    else if (parseFloat(rating.toString()) > 0) return "Average"
    else ""
  }

  return (
    <div className="border-b flex pb-5 text-gray-700 ml-4">
      {/* <Link href={`/restaurant/${restaurant.slug}`}> */}
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2"><Stars reviews={restaurant.reviews} /></div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
      {/* </Link> */}
    </div>
  )
}
