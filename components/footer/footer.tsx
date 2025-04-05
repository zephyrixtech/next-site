'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-[var(--black)] text-[var(--white)] py-5 relative z-[1]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Zephyrix Tech */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-[var(--light-teal)] text-lg mb-4">About Zephyrix Tech</h4>
            <p className="text-sm leading-relaxed">
              Zephyrix Tech: Innovating for Impact! We build cutting-edge products and empower future tech leaders
              through our MERN stack training. Whether you're upskilling or seeking a reliable tech partner, we've got
              you covered.{' '}
              <Link href="https://zephyrix.tech" target="_blank" className="text-[var(--white)] hover:text-[var(--light-teal)]">
                zephyrix.tech
              </Link>
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-[var(--light-teal)] text-lg mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0">
              {['Home', 'About', 'Contact'].map((item) => (
                <li key={item} className="mb-2">
                  <Link href="#" className="text-[var(--white)] hover:text-[var(--light-teal)] text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h4 className="text-[var(--light-teal)] text-lg mb-4">Follow Us</h4>
            <ul className="flex gap-4 justify-start md:justify-start">
              <li>
                <Link
                  href="https://www.linkedin.com/company/zephyrix-tech/"
                  target="_blank"
                  className="w-10 h-10 bg-[var(--transparent-white)] rounded-full flex items-center justify-center text-xl text-[var(--white)] hover:bg-[var(--primary-teal)] hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/zephyrixtech/"
                  target="_blank"
                  className="w-10 h-10 bg-[var(--transparent-white)] rounded-full flex items-center justify-center text-xl text-[var(--white)] hover:bg-[var(--primary-teal)] hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                  <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[var(--black)] text-[var(--white)] py-5 text-center text-sm mt-10">
        <p>
          © 2025 Zephyrix Tech. All rights reserved. |{' '}
          <Link href="#" className="text-[var(--gray)] hover:text-[var(--white)] mx-1">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="#" className="text-[var(--gray)] hover:text-[var(--white)] mx-1">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;