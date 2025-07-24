
import Button from './buttons/Button'
import { FaCar } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="px-4 py-4">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-700 ">
            Motor
          <span className="inline-flex items-center bg-gray-800 text-white px-3 py-2 rounded-full mx-2">
            <FaCar className="text-white w-3 h-3" />
          </span>{" "}
          Insurance
        </div>
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