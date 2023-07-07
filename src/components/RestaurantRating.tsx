import { calculateReviewAverage } from '@/app/utils/calculateReviewAverage'
import { Review } from '@prisma/client'
import React from 'react'
import Stars from './Stars'

export default function RestaurantRating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">{calculateReviewAverage(reviews)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">{reviews.length} Review(s)</p>
      </div>
    </div>
  )
}
