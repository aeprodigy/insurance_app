
import Button from './buttons/Button'
import { FaCar } from 'react-icons/fa';
interface NavBarProps {
  onGetQuoteClick: () => void;
}

const NavBar:React.FC <NavBarProps>= ({onGetQuoteClick}) => {
  return (
    <div className="px-4 py-4">
      <nav className="flex justify-between items-center">
        <div className="text md:text-2xl font-semibold text-gray-700 ">
          Motor
          <span className="inline-flex items-center bg-gray-800 text-white px-2 py-2 rounded-full mx-">
            <FaCar className="text-white w-3 h-3" />
          </span>
          Insurance
        </div>
        <ol className="hidden sm:flex space-x-3">
          <li className="cursor-pointer hover:font-bold">Home</li>
          <li className="cursor-pointer hover:font-bold">About Us</li>
          <li className="cursor-pointer hover:font-bold">Contact</li>
        </ol>
        {/**Button Component */}
        <Button 
        onClick={onGetQuoteClick}
        text={"Request Quote"} />
      </nav>
    </div>
  );
}

export default NavBar