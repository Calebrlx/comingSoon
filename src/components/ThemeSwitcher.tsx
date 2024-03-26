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
        {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" fill="white">
            <animate attributeName="r" from="10" to="10" dur="1s" repeatCount="indefinite" />
            <animate attributeName="fill" values="white;black;white" dur="1s" repeatCount="indefinite" />
          </circle>
        </svg> */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="12" height="24" fill="black" />
          <rect x="12" y="0" width="12" height="24" fill="white" />
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