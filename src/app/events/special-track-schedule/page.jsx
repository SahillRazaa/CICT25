import ScrollFadeIn from '@/app/(components)/scroll-animation'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center gap-4 mt-10 px-4">
      <ScrollFadeIn>
        <div className="flex h-16 items-center font-sans text-5xl text-[#4c2222] mt-20">
          To Be Updated soon ...
        </div>
      </ScrollFadeIn>
    </div>
  )
}

export default page