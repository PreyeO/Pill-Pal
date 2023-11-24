import { useState } from 'react';
import Logo from '../../../assets/Logo.svg';
import AccountBtn from '../../UI/Buttons/AccountBtn';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="relative">
        {/* Overlay for the entire screen when the sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-blue-500 "
            onClick={toggleSidebar}
          ></div>
        )}

        <div className="flex justify-around h-[120px] text-center items-center relative z-10">
          <div className="flex gap-2 cursor-pointer">
            <img src={Logo} alt="logo" className="w-[48px] h-[48px]" />
            <h3 className="text-black font-bold pt-3">
              Pill<span className="text-[#55AAFF]">Pal</span>
            </h3>
          </div>
          {/* Toggle button for small screens */}
          <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            className={`${
              isSidebarOpen
                ? 'md:flex flex-col items-center justify-center gap-8'
                : 'hidden'
            } md:flex gap-5 font-bold cursor-pointer md:space-x-5 md:items-center text-white z-50`}
          >
            <Link to="/">
              <li onClick={toggleSidebar}>Home</li>
            </Link>
            <li onClick={toggleSidebar}>For Patients</li>
            <li onClick={toggleSidebar}>For Providers</li>
          </ul>
          <div className="cursor-pointer">
            <AccountBtn label="Account" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
