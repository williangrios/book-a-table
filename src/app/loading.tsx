import Header from '@/components/Header'
import React from 'react'

export default function Loading() {
  return (
    <main>
      <Header />
      <div className="flex flex-wrap justify-center py-3 px-36 mt-10">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
          <div key={num} className="animate-pulse bg-slate-200 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"></div>
        ))}
      </div>
    </main>
  )
}
