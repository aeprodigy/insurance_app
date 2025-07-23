import React from 'react'
import Button from './buttons/Button'

const NavBar = () => {
  return (
    <div className="px-4 py-4">
      <nav className="flex justify-between items-center">
        <div className="text-3xl font-semibold text-gray-700 ">Logo</div>
        <ol className="hidden sm:flex space-x-3  ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
        </ol>
        {/**Button Component */}
        <Button text={"Request Quote"} />
      </nav>
    </div>
  );
}

export default NavBar