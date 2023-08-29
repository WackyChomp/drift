import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from '@/components/shared/Navbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Footer from '@/components/shared/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>

          <Navbar />

          <main>
            <LeftSidebar />

            <section className='main-container'>
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>
            
            <RightSidebar />
          </main>

          <Footer />

        </body>
      </html>
    </ClerkProvider>
  )
}
