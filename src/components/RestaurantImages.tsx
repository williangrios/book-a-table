import React from 'react'

export default function RestaurantImages({ images, name }: { images: string[], name: string }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 && "s"}
      </h1>
      <div className="flex flex-wrap">
        {
          images.map((im, i) => (
            <img key={i}
              className="w-56 h-44 mr-1 mb-1"
              src={im}
              alt={name}
            />
          ))
        }
      </div>
    </div>
  )
}
