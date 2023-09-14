"use client"

import React from 'react'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

type Props = {}

const Footer = (props: Props) => {
  const pathname = usePathname();

  return (
    <section className="footer">
      <div className="footer-container">
        {sidebarLinks.map((link) => {

          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          return(
            <Link 
              href={link.route}
              key={link.label}
              className={`leftsidebar-link ${isActive && 'bg-primary-500'}`}
            >
              <Image 
                src={link.imgUrl}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className='text-light-1 max-sm:hidden'>{link.label}</p>
            </Link>
          )
          })}
      </div>
    </section>
  )
}

export default Footer