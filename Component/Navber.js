import React from 'react'
import Link from 'next/link'

const Navber = () => {
  return (
    <nav className="nav">
    <h1 className="brand"><Link href="/">Code Hunt</Link></h1>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/aboutus">About Us</Link></li>
      <li><Link href="/contactus">Contact Us</Link></li>
    </ul>        
    </nav>  

  )
}

export default Navber