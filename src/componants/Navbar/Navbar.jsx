import React from 'react'
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';


const Navbar = () => {

    // const [menu, OpenMenu] = React.useState(false);
    // const [showMenu, setShowMenu] = React.useState(true);  
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }   

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 '>
        
        <span className='text-xl font-bold tracking-wide'><a href="/">Kawsar's- Porfolio</a></span>
        <ul className={`  ${menuOpen ? 'block' : 'hidden'}   md:d-hidden mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}> 

           <a href="#About"> <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li> </a>
           <a href="#Experience"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Experience</li> </a>
           <a href="#Project"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Project</li> </a>
           <a href="#Contact"> <li className='text-md transition-all duration-300 p-1 md:p-0' >Contact</li> </a>
        </ul>
        {menuOpen ? (
            <RiCloseLine size={30} 
            className='md:hidden absolute right-10 top-6 transition-all duration-300' 
            onClick={toggleMenu} 
            />
        ): (
        <RiMenu2Line size={30} 
        className='md:block absolute right-10 top-6 transition-all duration-300' 
        onClick={toggleMenu}
        />
        )}
    </nav>
  );
};

export default Navbar