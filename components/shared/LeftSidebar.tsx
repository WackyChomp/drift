import { sidebarLinks } from '@/constants'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const LeftSidebar = (props: Props) => {
  return (
    <section className='custom-scrollbar-leftsidebar'>
      <div>LeftSidebar</div>
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => (
          <Link 
            href={link.route}
            key={link.label}
            className='leftsidebar_link'
          >
            <Image 
              src={link.imgUrl}
              alt={link.label}
              width={20}
              height={20}
            />
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

    </section>
  )
}

export default LeftSidebar