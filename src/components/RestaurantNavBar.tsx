import React from 'react'
import Link from 'next/link'

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href={`/restaurant/${`mil`}`} className="mr-7 ">
        Overview
      </Link>
      <Link href={`/restaurant/${`rest`}/menu`} className="mr-7 ">
        Menu
      </Link>
    </nav>
  )
}
