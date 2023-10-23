"use client"

import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';


{/* Specifically for mobile screens */}

type Props = {}

const BottomBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar-container">
        {sidebarLinks.map((link) => {

          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          return(
            <Link 
              href={link.route}
              key={link.label}
              className={`bottombar-link ${isActive && 'bg-primary-500'}`}
            >
              <Image 
                src={link.imgUrl}
                alt={link.label}
                width={20}
                height={20}
              />

              {/* text only displays on medium tablet screen */}
              <p className='text-small-regular text-light-1 max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
            </Link>
          )
          })}
      </div>
    </section>
  )
}

export default BottomBar