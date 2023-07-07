import React from 'react'

export default function RestaurantHeader({name}: {name: string}) {
  function renderTitle(){
    const nameArray = name.split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    return nameArray
  }

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white captitalize text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  )
}
