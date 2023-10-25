import React from 'react'

type Props = {}

const TestPageOnboarding = (props: Props) => {
  return (
    <main className='mx-auto flex flex-col justify-start max-w-3xl px-10 py-20'>
      <h1 className="head-text text-yellow-300">Onboarding Test</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile before proceeding further
      </p>
    </main>
  )
}

export default TestPageOnboarding;