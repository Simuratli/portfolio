"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { navigation } from '@/constants/navigation'
import AboutSheet from '@/components/about-sheet'

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <>
      <nav className={`relative z-50 w-full flex items-center justify-between px-8 py-4 transition-colors ${aboutOpen ? 'bg-red-500' : 'bg-white'}`}>
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="vlockn." />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-900 tracking-tight">simuratli.</span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-8">
          {navigation.map((item) => (
            <li key={item}>
              {item === 'About' ? (
                <button
                  onClick={() => setAboutOpen(true)}
                  className={`text-sm transition-colors px-2 py-1 rounded ${
                    aboutOpen ? 'text-gray-950 font-medium' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ) : (
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <AboutSheet open={aboutOpen} onOpenChange={setAboutOpen} />
    </>
  )
}

export default Navbar
