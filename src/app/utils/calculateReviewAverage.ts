import { Review } from "@prisma/client";

export function calculateReviewAverage(reviews: Review[]){
  if(reviews.length === 0) return 0
  const avg = reviews.reduce((sum, review) => {
    return sum + review.rating
  }, 0 ) / reviews.length
  return avg.toFixed(1)
}
