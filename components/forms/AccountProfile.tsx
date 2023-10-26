import React from 'react';

type Props = {
  btnTitle: string;
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  }
}

const AccountProfile = (btnTitle, user: Props) => {
  return (
    <div className='text-red-400 font-semibold'>AccountProfile</div>
  )
}

export default AccountProfile