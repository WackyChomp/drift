import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='navbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif' alt='' width={30} height={30} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Drift</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif'
                  alt='logout'
                  width={25}
                  height={25}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        
        <div className='text-yellow-300'>Organization Switcher Goes Here</div>
        <OrganizationSwitcher 
          appearance={{
            elements: {
              organizationSwitcherTrigger: 'py-4 px-10'
            }
          }}
        />

      </div>
    </nav>
  )
}

export default Navbar