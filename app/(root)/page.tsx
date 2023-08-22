import { UserButton } from "@clerk/nextjs";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Hello :O ---- Welcome to Drift ^_^
      </h1>
      <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
    </main>
  )
}