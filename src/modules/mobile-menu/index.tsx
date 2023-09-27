import React from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import Hamburger from '@modules/common/components/hamburger'
import X from '@modules/common/icons/x'

function MobileMenu() {
  return (
    <Menu as='div' className='xsmall:hidden'>
    <Menu.Button>
      {({ open }) => !open ? <Hamburger/> : <X/>}
    </Menu.Button>
    <div className="ui-not-open:hidden fixed inset-0 bg-black/50 mt-24 -z-50" aria-hidden="true" />
    <Menu.Items className='fixed top-0 left-0 z-50 mt-24 px-6 py-12 space-y-8 tracking-wider w-full flex flex-col uppercase bg-black text-white text-2xl'>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`${active && 'bg-blue-500'}`}
            href="/about"
          >
            Our company
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`${active && 'bg-blue-500'}`}
            href="/locations"
          >
            Locations
          </Link>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <Link
            className={`${active && 'bg-blue-500'}`}
            href="/contact"
          >
            Contact
          </Link>
        )}
      </Menu.Item>
    </Menu.Items>
  </Menu>
  )
}

export default MobileMenu