import React from "react";

const NavBar = () => {
  return (
    <nav className=" bg-[var(--color-primary)] fixed w-full z-20 top-0 start-0 border-b  border-[var(--color-accent)">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img 
            src="logo-ecuaimco.png" 
            className="h-10 mx-7" 
            alt="Flowbite Logo" 
          />

        </a>


        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-[var(--color-text)]  rounded-sm md:bg-transparent  md:p-0 md:text-yellow-400" aria-current="page">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  rounded-sm   md:p-0 md:hover:text-yellow-400 text-[var(--color-text)] hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3  rounded-sm   md:p-0 md:hover:text-yellow-400 text-[var(--color-text)] hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                Productos
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded-sm   md:p-0 md:hover:text-yellow-400 text-[var(--color-text)] hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
