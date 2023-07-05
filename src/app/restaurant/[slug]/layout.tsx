import RestaurantHeader from '@/components/RestaurantHeader'
import React from 'react'

export const metadata = {
  title: 'Reserve sua mesa nos melhores restaurantes',
  description: 'Created by Willian Rios',
}

export default function RestaurantLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <RestaurantHeader />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-gray-700">
        {children}
      </div>
    </>
  )
}
