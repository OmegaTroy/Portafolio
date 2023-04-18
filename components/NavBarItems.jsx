import React from 'react'
import Link from 'next/link'

export const NavBarItems = ({links}) => {
  return (
    <div className='mx-4'>
      <ul className="text-1xl flex justify-around pt-3 pb-5 flex-col gap-5 font-semibold text-white">
        {links.map((link) => (
          <li key={link.name}>
            {link.path == "https://github.com/OmegaTroy" ? (
              <Link
                href={link.path}
              >
                GitHub
              </Link>
            ) : (
              <Link
                href={link.path}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
