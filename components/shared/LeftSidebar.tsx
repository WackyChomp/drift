"use client"    // needed to render on client side

import { sidebarLinks } from '@/constants'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import { SignedIn, SignOutButton } from '@clerk/nextjs';


type Props = {}

const LeftSidebar = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <section className='custom-scrollbar leftsidebar'>
      <div className='text-red-400 flex justify-center uppercase'>LeftSidebar</div>

      <div className="flex w-full flex-1 flex-col gap-6 px-6">
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
            <p className='text-light-1 max-lg:hidden'>{link.label}</p>
          </Link>
          )
        })}

      </div>


      <div className="mt-10 px-5">
        <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image
                  src='https://media4.giphy.com/media/10QZvWwBUQbpqE/giphy.gif'
                  alt='logout'
                  width={25}
                  height={25}
                />
                <p className="text-light-2 max-lg:hidden">Log Outta Here!</p>
              </div>
            </SignOutButton>
          </SignedIn>
      </div>
    </section>
  )
}

export default LeftSidebar