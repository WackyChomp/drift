import React from 'react'

type Props = {}

const RightSidebar = (props: Props) => {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="text-heading3-medium text-yellow-500 flex flex-1 flex-col justify-start">
        <h3>Suggested Communities</h3>
        <div className="pt-5">
          <div className="bg-gray-800 text-red-900 w-max p-4 gap-2 flex flex-col">
            <p className='flex-center text-pink-500'>Item Collections</p>
            <div className="grid grid-flow-col grid-rows-2 gap-5 max-md:grid-rows-1">
              <div className="bg-yellow-400 flex-center w-16 h-16">Item # 1</div>
              <div className="bg-red-400 flex-center w-16 h-16">Item # 2</div>
              <div className="bg-green-400 flex-center w-16 h-16">Item # 3</div>
              <div className="bg-blue-400 flex-center w-16 h-16">Item # 4</div>
              <div className="bg-purple-400 flex-center w-16 h-16">Item # 5</div>
              <div className="bg-pink-400 flex-center w-16 h-16">Item # 6</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-heading3-medium text-pink-500 flex flex-1 flex-col justify-start">
        <h3>Latest News</h3>
        <div className="pt-5">
          <div className="bg-gray-800 text-blue-700 p-4">
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
            <div className="bg-orange-400 border-orange-800 border flex">item 1</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RightSidebar