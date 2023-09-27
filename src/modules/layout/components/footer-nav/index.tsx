"use client"

import Image from "next/image"
import Link from "next/link"

const FooterNav = () => {

  return (
    <div className="px-6 flex flex-col text-center gap-y-8 py-16 bg-black text-white">
      <div className="flex flex-col items-center">
        <div>
          <Link href="/">
            <Image src='/assets/shared/desktop/logo-light.png'
              alt='designo light logo'
              width={202}
              height={27}
            />
          </Link>
        </div>
        <hr className="w-full opacity-10 my-8" />
        <div className="uppercase">
          <ul className="flex flex-col gap-y-8 tracking-widest">
            <li>
              <Link href="/">
                Our company
              </Link>
            </li>
            <li>
              <Link href="/">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="opacity-50 leading-6">
        <p>
        <span className="font-bold">Designo Central Office</span><br/>
          3886 Wellington Street<br />
          Toronto, Ontario M9C 3J5
        </p>
      </div>
      <div className="opacity-50 leading-6">
        <p>
          <span className="font-bold">Contact Us (Central Office)</span><br/>
          P : +1 253-863-8967<br />
          M : contact@designo.co
        </p>
      </div>
      <div className="flex gap-x-4 justify-center">
        <Image
          src="/assets/shared/desktop/icon-facebook.svg"
          alt="facebook logo"
          width={24}
          height={24}
        />
        <Image
          src="/assets/shared/desktop/icon-youtube.svg"
          alt="youtube logo"
          width={24}
          height={24}
        />
        <Image
          src="/assets/shared/desktop/icon-twitter.svg"
          alt="twitter logo"
          width={24}
          height={24}
        />
        <Image
          src="/assets/shared/desktop/icon-pinterest.svg"
          alt="pinterest logo"
          width={24}
          height={24}
        />
        <Image
          src="/assets/shared/desktop/icon-instagram.svg"
          alt="instagram logo"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}

export default FooterNav
