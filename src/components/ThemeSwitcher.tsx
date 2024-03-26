"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  
  return (
    <div className="">
        <button 
          className="text-slate-500 p-2 bg rounded-full border-slate-50	"
          onClick={() => { currentTheme === "light" ? setTheme("dark") : setTheme("light") }}>
          {/* { currentTheme === "light" ? "DARK" : "LIGHT" } */}
          <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">
            <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z" ></path>
          </svg>
        </button>
        {/* {currentTheme === "light" ? (
            <MoonIcon
                className="size-5 cursor-pointer text-slate-700"
                onClick={() => {
                    setTheme("dark")
                }}
            />
      ) : (
        <SunIcon
            className="size-5 cursor-pointer text-yellow-400"
            onClick={() => {
                setTheme("light")
            }}
        />
      )} */}
    </div>
  );
};