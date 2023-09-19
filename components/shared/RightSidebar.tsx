import React from 'react'

type Props = {}

const RightSidebar = (props: Props) => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="text-heading3-medium text-yellow-500 flex flex-1 flex-col justify-start">
        <h3>Suggested Communities</h3>
      </div>
    </section>
  )
}

export default RightSidebar