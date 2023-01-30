import Link from 'next/link';
import Image from 'next/image';

import Logo from 'assets/logo.png';
export default function Layout({ children }) {
  return (
    <>
      <header className="p-5 pt-7 pb-7 bg-primary">
        <div className="container m-auto flex justify-between items-center">
          <Link href="/" className="text-4xl font-[700] text-white flex items-center">
            <Image src={Logo} alt="Ecopass logo" width={40} height={40} className="mr-3" />
            <span>Ecopass</span>
          </Link>

          <nav>
            <ul className="flex gap-x-12 text-xl font-[500] text-white">
              <li>
                <Link href="/blog">Poradniki</Link>
              </li>
              <li>
                <Link href="/">Kalkulatory</Link>
              </li>
              <li>
                <Link href="/">Bezemisyjność</Link>
              </li>
              <li>
                <Link href="/">Kontakt</Link>
              </li>
              <li>
                <Link href="/" className="bg-secondary rounded-3xl pt-2 pb-2 pl-6 pr-6">
                  Sklep
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="container m-auto p-5">footer</footer>
    </>
  );
}
