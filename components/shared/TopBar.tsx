'use client'

import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, SignedIn, SignedOut, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useRouter } from 'next/navigation';

type Props = {}

const TopBar = (props: Props) => {
  const router = useRouter();

  return (
    <nav className='topbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif' alt='' width={30} height={30} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Drift</p>
      </Link>

      <div className="flex items-center gap-1">

        <SignedOut>
          <div className="bg-primary-500 p-1.5 rounded-md text-white">
            <SignInButton>Sign In</SignInButton>
          </div>
        </SignedOut>


        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className="flex cursor-pointer">
                <Image
                  src='https://media4.giphy.com/media/10QZvWwBUQbpqE/giphy.gif'
                  alt='logout'
                  width={25}
                  height={25}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        
        
        <OrganizationSwitcher 
          appearance={{
            baseTheme: dark,    // makes text white for dark backgrounds
            elements: {
              organizationSwitcherTrigger: 'py-2 px-5'
            }
          }}
        />

      </div>
    </nav>
  )
}

export default TopBar