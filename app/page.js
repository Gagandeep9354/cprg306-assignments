import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2"> Week 2 Page </Link><br />
      <Link href="/week-3"> Week 3 Page</Link><br />
      <Link href="/week-4"> Week 4 Page</Link><br />
      <Link href="/week-5"> Week 5 Page</Link>
    </div>
  )
}

export default page