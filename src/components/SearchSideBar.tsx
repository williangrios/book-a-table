import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default function SearchSideBar({ cuisines, locations, searchParams }: { cuisines: Cuisine[], locations: Location[], searchParams: { city?: string, cuisine?: string, price?: PRICE } }) {

  const prices = [{
    price: PRICE.CHEAP,
    label: '$'
  }, {
    price: PRICE.REGULAR,
    label: '$$'
  }, {
    price: PRICE.EXPENSIVE,
    label: '$$$'
  }]

  console.log('aqui');
  console.log(searchParams);
  
  

  return (
    <div className="w-1/5 text-gray-700">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {
          locations.map((location) => <Link key={location.id}
            href={
              {
                pathname: '/search',
                query: {
                  ...searchParams,
                  city: location.name,
                }
              }} className="font-light text-reg">{location.name}</Link>)
        }
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {
          cuisines.map((cuisine) =>
          <Link key={cuisine.id}
            href={
              {
                pathname: '/search',
                query: {
                  ...searchParams,
                  cuisine: cuisine.name
                }
              }}
            className="font-light text-reg">{cuisine.name}</Link>)
        }
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {
            prices.map((price, i) => (
              <Link key={i}
                href={{
                  pathname: '/search',
                  query: {
                    ...searchParams,
                    price: price.price
                  }
                }}
                className="border w-full text-reg font-light rounded-l p-2 text-center">
                {price.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
