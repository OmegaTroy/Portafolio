import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5/index.js";

const themes = ['light','dark'];

const ThemeToggle=()=>{
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }

    return "light";
  });
  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return isMounted ? (
    <div className="relative md:-right-8 right-0">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "shadow-lg hidden md:vertCentered text-xl p-2 rounded-full" : "text-white"
            } shadow-lg md:vertCentered text-xl p-2 bg-boton dark:text-orange dark:bg-white rounded-full`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>) : (<div/>);
}
export default ThemeToggle