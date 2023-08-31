import Link from 'next/link';
import Image from 'next/image';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='navbar'>
      <Link href='/' className='flex items-center gap-4'>
        <Image src='https://media.tenor.com/ZFoOuUSqPBEAAAAi/stalzone-meme.gif' alt='' width={30} height={30} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Drift</p>
      </Link>
    </nav>
  )
}

export default Navbar