import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='flex items-center justify-center gap-10 p-10 text-cyan-200 underline '>
        <Link href="/films/ourfilms">Our Films</Link>
      <Link href="/films/upcoming">Upoming Films</Link>
      </div>
      <h1>This is Film page</h1>
    </div>
  )
}

export default page
