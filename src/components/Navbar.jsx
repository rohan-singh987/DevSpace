import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between sm:px-5 px-2 bg-gray-200'>
        <h1 className='sm:text-4xl text-2xl font-bold sm:p-3 p-2'>
        DevSpace
        </h1>

        <button className='pr-3 text-xl'>
            Add New
        </button>
    </div>
  )
}

export default Navbar