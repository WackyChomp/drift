import React from 'react'
import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';


async function TestPageOnboarding() {
  const user = await currentUser();
  const userInfo = {};

  const userData = {
    id: 'FETCH FROM DATABASE',
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user.firstname || "",
    bio: userInfo?.bio || "", 
    image: userInfo?.image || user.imageUrl,
  }

  return (
    <main className='mx-auto flex flex-col justify-start max-w-3xl px-10 py-20'>
      <h1 className="head-text text-yellow-300">Onboarding Test</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile before proceeding further
      </p>

      <section className="mt-9 bg-dark-3 p-10">
        <AccountProfile 
          user={userData}
          btnTitle='Continue'
        />
      </section>

    </main>

  )
}

export default TestPageOnboarding;