"use client"

import MobileMenu from "@modules/mobile-menu"
import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <div className="h-24">
      <header className="relative z-50">
        <nav className="flex px-6 py-9">
          <div className="flex flex-1 z-50">
            <Link href="/">
              <Image src='/assets/shared/desktop/logo-dark.png'
                alt='designo dark logo'
                width={202}
                height={27}
              />
            </Link>
          </div>
          <ul className='hidden xsmall:flex'>
            <li className="">
              <Link href="/about">Our Company</Link>
            </li>
            <li className="">
              <Link href="/account">Locations</Link>
            </li>
            <li className="">
              <Link href="/account">Contact</Link>
            </li>
          </ul>
          <MobileMenu />
        </nav>
     </header>
    </div>
  )
}

export default Nav
