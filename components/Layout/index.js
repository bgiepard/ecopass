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
      name: 'produkty',
      path: '/produkty',
      customClasses: ''
    },
    {
      id: 3,
      name: 'kalkulatory',
      path: '/kalkulatory',
      customClasses: ''
    },
    {
      id: 4,
      name: 'sklep',
      path: 'https://sklep.ecopass.pl/',
      customClasses: 'font-semibold'
    }
  ];

  return (
    <>
      <GoogleAnalytics />

      <header className="pt-7 pb-7 bg-primary">
        <div className="container flex justify-between items-center bg-primary">
          <Link href="/" className="text-5xl font-[700] text-white flex items-center -ml-3">
            <Image src={Logo} alt="Ecopass logo" width={250} height={'auto'} />
          </Link>
          <nav
            className={`duration-500 fixed z-30 left-0 right-0 pb-5 pl-10 top-0 bottom-0 bg-white pt-[100px] ${
              menuVisible ? 'translate-x-0' : 'translate-x-[100%]'
            }
            lg:translate-x-0 lg:bg-transparent lg:pb-0 lg:pl-0 lg:left-auto lg:right-auto lg:top-auto lg:static lg:pt-0`}>
            <ul className="text-3xl font-[500] text-primary lg:flex lg:items-center lg:gap-x-12 lg:text-white lg:text-2xl ">
              {links.map((item) => {
                return (
                  <li key={item.id} className="mb-5 lg:mb-0">
                    <Link href={item.path} className={item.customClasses}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            aria-label="menu"
            className="relative z-30 lg:hidden"
            onClick={() => setMenuVisible(!menuVisible)}>
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
        <div className="container p-5 pt-7 pb-7 flex sm:gap-10 gap-5 text-white flex-col-reverse lg:flex-row">
          <span className="flex-grow mt-8 lg:mt-0">
            &copy; Ecopass.pl - Wszelkie prawa zastrzeżone
          </span>
          <Link href="https://sklep.ecopass.pl/regulamin-sklepu/">Regulamin</Link>
          <Link href="https://sklep.ecopass.pl/polityka-prywatnosci/">Polityka prywatności</Link>
        </div>
      </footer>
    </>
  );
}
