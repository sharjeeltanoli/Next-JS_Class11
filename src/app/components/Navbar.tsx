import Link from "next/link"
import { Component } from "react"
const Header = () => {
  return (
<header className="flex bg-red-100 justify-between w-full mx-auto py-5 px-10">
        <h1 className="font-bold">
        LOGO!!!
        </h1>
        <ul className="flex space-x-8">
        <li> <Link href={"/"}> Home </Link></li>
    
        </ul>

    </header>
  )
}

export default Header