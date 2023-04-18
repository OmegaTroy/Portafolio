import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import NavBarMenu from './NarBarMenu'
import ThemeToggle from './ThemeToggle'
import { AiFillGithub } from 'react-icons/ai'

const links = [
  {name: 'Home', path: '/'},
  {name: 'About me', path: '#about'},
  {name: 'Skills', path: '#skills'},
  {name: <AiFillGithub/>, path: 'https://github.com/OmegaTroy'},
]

const Navbar = () => {
  return (
    <nav className="w-[100%] h-12 flex fixed items-center z-10 justify-between px-4 top-0 dark:bg-boton bg-white">
      <Logo/>
      <ul className="hidden md:flex gap-8 h-12 items-center px-7 ">
        {links.map((link) => (
          <li key={link.name}>
            {link.path == "https://github.com/OmegaTroy" ? (
              <Link
                className="text-2xl font-semibold dark:text-white text-Cuarto"
                href={link.path}
              >
                {link.name}
              </Link>
            ) : (
              <Link
                className="text-1xl font-bold dark:text-white p-1 hover:border-b-2"
                href={link.path}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className='w-20 flex justify-center items-center'>
        <ThemeToggle/>
        <NavBarMenu links={links}/>
      </div>
    </nav>
  );
}

export default Navbar
