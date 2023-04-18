import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoMenu } from "react-icons/io5/index.js";
import { NavBarItems } from "./NavBarItems";

export default function MyMenu({ links }) {
  return (
    <Menu as="div" className="relative md:hidden inline-block ml-3 text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md bg-boton text-white dark:bg-white dark:text-boton shadow-md shadow-zinc-600 px-1 py-1 text-sm font-medium transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-4 w-40 origin-top-right rounded-md border bg-Cuarto">
          <div className="py-1">
            <div className="px-3 py-2 font-bold text-FV text-xl">
              Julian Iocco
              <hr className="mt-1"/>
            </div>
              <NavBarItems links={links}/>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
