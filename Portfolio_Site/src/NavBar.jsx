import { useRef } from 'react';

import React from 'react';
import Home from './Home';
import hero from "./assets/Hero.png";
import { Link } from 'react-router-dom';


const NavBar = ({logo}) => {
  return (
    <>
    <Home Hero={hero} className="top-0 left-0"> </Home>
      <div className="flex p-3 font-sans">
        <div className="fixed top-0 left-0 w-full bg-white h-24 flex justify-between items-center px-10 shadow-sm">
          <img src={logo} alt="Logo" className="h-16" />
          <ul className="flex space-x-10">
            {['Home', 'Skills', 'Education', 'Projects', 'Recommendations', 'Contact'].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`} className="text-black cursor-pointer border-2 border-transparent transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:rounded-md hover:text-black hover:px-2 hover:py-1">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
