import { GoogleAnalytics } from 'nextjs-google-analytics';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'assets/logo.png';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showCookieInfo, setShowCookieInfo] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowCookieInfo(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', true);
    setShowCookieInfo(false);
  };

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

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );

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

      {showCookieInfo && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
          Ta strona korzysta z plików cookies. Kliknij{' '}
          <button className="underline" onClick={acceptCookies}>
            tutaj
          </button>
          , aby zaakceptować.
        </div>
      )}

      <footer className="bg-primary border-t-2">
        <div className="container m-auto px-12 py-7 flex sm:gap-10 gap-5 text-white flex-col lg:flex-row lg:justify-between ">
          <div className="mt-8 lg:mt-0">
            <Image src={Logo} alt="logo" width={200} height="auto" className="-ml-[10px] mb-3" />
            <span className="font-bold">&copy; Ecopass.pl - Wszelkie prawa zastrzeżone</span>
            <p>kontakt@ecopass.pl</p>
            <p className="mb-5">tel: +48 690 893 023</p>
            <span className="font-bold">Znajdź nas na:</span>
            <div className="flex gap-3">
              <Link href="https://www.facebook.com/ecopass1/">
                <span className="text-white fill-current">
                  <FacebookIcon />
                </span>
              </Link>
              <Link href="https://www.instagram.com/ecopass.pl/">
                <span className="text-white fill-current">
                  <InstagramIcon />
                </span>
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col gap-2">
            <span className="font-bold">Menu</span>
            <Link href="/">Strona główna</Link>
            <Link href="/blog">Artykuły</Link>
            <Link href="/produkty">Produkty</Link>
            <Link href="/kalkulatory">Kalkulatory</Link>
            <Link href="https://sklep.ecopass.pl/regulamin-sklepu/">Regulamin</Link>
            <Link href="https://sklep.ecopass.pl/polityka-prywatnosci/">Polityka prywatności</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
