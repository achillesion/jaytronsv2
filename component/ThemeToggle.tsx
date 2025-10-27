"use client"
import React, { useState, useEffect } from 'react'
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='w-16 h-8 flex items-center rounded-full bg-[#378066] dark:bg-yellow-200 p-1'>
        <div className='w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center'>
          <div className='w-3 h-3 rounded-full bg-yellow-500 dark:bg-black'></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className='w-16 h-8 flex items-center rounded-full   cursor-pointer p-1 transition-colors duration-300 ' 
      onClick={toggleTheme}
    >
      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
        theme === 'dark' ? 'translate-x-8 bg-gray-800' : 'translate-x-0 bg-white'
      }`}>
        {theme === 'dark' ? (
          <FaMoon className='text-white' size={14}/>
        ) : (
          <BsSunFill className='text-yellow-500' size={14}/>
        )}
      </div>
    </div>
  )
}

export default ThemeToggle