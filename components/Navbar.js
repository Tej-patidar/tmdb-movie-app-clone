import React from 'react'
import style from "../styles/Navbar.module.css";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div>
        <nav>
<ul className={style.navUl}>
   <Link href={"/"}> <li><img 
    src="./tmdblogo.png" alt="" 
    width={120} /></li></Link>
    <Link href={"/"}><li>Movie</li></Link>
   <Link href={"/"}> <li>Tv Shows</li></Link>
</ul>
        </nav>
    </div>
  )
}

export default Navbar;