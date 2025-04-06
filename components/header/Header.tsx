'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlayMenu = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <header className="bg-[var(--white)] shadow-[0_4px_6px_var(--shadow-color)] fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-[var(--primary-teal)]">Z</span>ephyrix{' '}
        <span className="text-[var(--primary-teal)]">T</span>ech
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex">
        <ul className="flex gap-5 m-0 p-0 list-none">
          {['Home', 'About', 'Services', 'Products', 'Projects'].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()=== 'home' ? '' : item.toLowerCase()}`}
                className="text-[var(--black)] font-medium hover:text-[var(--primary-teal)] hover-underline transition-colors duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button (Desktop) */}
      <Link href="/contact">
        <button className="hidden md:block bg-[var(--primary-teal)] text-[var(--white)] px-5 py-2 rounded-md hover:bg-[var(--hover-teal)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          Contact us
        </button>
      </Link>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--white)] py-2 px-4 border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-2xl z-[1000] flex justify-between">
        {[
          { href: '/', icon: 'M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2zm0 2.83L19.17 12h-1.67v8h-3v-6H9.5v6h-3v-8H4.83L12 4.83z', label: 'Home' },
          { href: '/about', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm0 4h-2v6h2v-6z', label: 'About' },
          { href: '/contact', icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z', label: 'Contact' },
          { href: '/', icon: 'M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z', label: 'Menu', onClick: toggleOverlayMenu },
        ].map((nav) => (
          <Link
            key={nav.label}
            href={nav.href}
            className="flex flex-col items-center text-[var(--gray)] text-xs hover:text-[var(--primary-teal)] transition-all duration-300 flex-1 py-2 relative group"
            onClick={nav.onClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="var(--primary-teal)"
              className="mb-1 group-hover:scale-110 transition-transform duration-300"
            >
              <path d={nav.icon} />
            </svg>
            <span>{nav.label}</span>
            {nav.label !== 'Menu' && (
              <span className="absolute -top-1.5 w-8 h-1 bg-gradient-to-r from-[var(--light-teal)] via-[var(--primary-teal)] to-[var(--dark-teal)] rounded-full opacity-0 group-[&.active]:opacity-100" />
            )}
          </Link>
        ))}
      </nav>

      {/* Overlay Menu */}
      <div
        className={`fixed top-0 w-full h-screen bg-gradient-to-br from-[rgba(0,0,0,0.95)] to-[rgba(25,0,35,0.95)] z-40 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] backdrop-blur-md flex flex-col justify-center items-center ${
          isOverlayOpen ? 'left-0' : '-left-full'
        }`}
      >
        <div className={`w-4/5 max-w-2xl text-center transition-all duration-500 ${isOverlayOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div
            className="absolute -top-16 right-0 p-2 cursor-pointer hover:rotate-90 transition-transform duration-300"
            onClick={toggleOverlayMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="var(--primary-teal)"
              className="drop-shadow-[0_0_5px_rgba(38,166,154,0.7)]" /* Adjusted shadow color */
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </div>
          <ul className="list-none p-0 m-0 flex flex-col gap-5">
            {['Home', 'About', 'Services', 'Products', 'Projects', 'Contact'].map((item, index) => (
              <li
                key={item}
                className={`overflow-hidden transition-all duration-400 ${isOverlayOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-[var(--white)] text-2xl md:text-3xl font-semibold block py-2 px-5 relative hover:text-[var(--primary-teal)] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(38,166,154,0.3)] transition-all duration-300 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[2px] before:bg-[var(--primary-teal)] before:transition-all before:duration-300 hover:before:w-[80%]"
                  onClick={toggleOverlayMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;