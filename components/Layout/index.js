import { GoogleAnalytics } from 'nextjs-google-analytics';

import Link from 'next/link';
import Image from 'next/image';

import Logo from 'assets/logo.png';
import { useState } from 'react';
export default function Layout({ children }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const links = [
    {
      id: 1,
      name: 'artykuły',
      path: '/blog',
      customClasses: ''
    },
    {
      id: 2,
      name: 'kalkulatory',
      path: '',
      customClasses: ''
    },
    {
      id: 3,
      name: 'sklep',
      path: '',
      customClasses: 'font-semibold'
    }
  ];

  return (
    <>
      <GoogleAnalytics />

      <header className="pt-7 pb-7 bg-primary">
        <div className="container flex justify-between items-center bg-primary">
          <Link href="/" className="text-5xl font-[700] text-white flex items-center">
            <span className="mr-2">ecopass</span>
            <Image src={Logo} alt="Ecopass logo" width={40} height={40} />
          </Link>
          <nav
            className={`duration-500 fixed z-30 left-0 right-0 pb-5 pl-10 top-0 bottom-0 bg-white pt-[100px] ${
              menuVisible ? 'translate-x-0' : 'translate-x-[100%]'
            }
            md:translate-x-0 md:bg-transparent md:pb-0 md:pl-0 md:left-auto md:right-auto md:top-auto md:static md:pt-0`}>
            <ul className="text-3xl font-[500] text-primary md:flex md:items-center md:gap-x-12 md:text-white md:text-2xl ">
              {links.map((item) => {
                return (
                  <li key={item.id} className="mb-5 md:mb-0">
                    <Link href={item.path} className={item.customClasses}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button className="relative z-30 md:hidden" onClick={() => setMenuVisible(!menuVisible)}>
            {menuVisible ? (
              <span className="block rotate-45 mt-1">
                <span className="w-[30px] h-[4px] block bg-black"></span>
                <span className="w-[30px] h-[4px] block bg-black rotate-90 -translate-y-[4px]"></span>
              </span>
            ) : (
              <>
                <span className="w-[30px] h-[4px] block bg-white mt-1"></span>
                <span className="w-[30px] h-[4px] block bg-white mt-1"></span>
                <span className="w-[30px] h-[4px] block bg-white mt-1"></span>
              </>
            )}
          </button>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-primary border-t-2">
        <div className="container p-5 pt-7 pb-7 flex gap-x-10 text-white flex-col-reverse md:flex-row">
          <span className="flex-grow mt-8 md:mt-0">
            &copy; Ecopass.pl - Wszelkie prawa zastrzeżone
          </span>
          <span>Regulamin</span>
          <span>Polityka prywatności</span>
        </div>
      </footer>
    </>
  );
}
