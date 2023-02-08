import Link from 'next/link';
import Image from 'next/image';

import Logo from 'assets/logo.png';
export default function Layout({ children }) {
  const links = [
    {
      id: 1,
      name: 'artykuły',
      path: 'blog',
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
      <header className="p-5 pt-7 pb-7 bg-primary">
        <div className="container m-auto flex justify-between items-center pl-3 pr-3">
          <Link href="/" className="text-5xl font-[700] text-white flex items-center">
            <span className="mr-2">ecopass</span>
            <Image src={Logo} alt="Ecopass logo" width={40} height={40} />
          </Link>

          <nav>
            <ul className="flex gap-x-12 text-2xl font-[500] text-white">
              {links.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path} className={item.customClasses}>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-primary border-t-2">
        <div className="container m-auto p-5 pt-7 pb-7 flex gap-x-10 text-white pl-3 pr-3">
          <span className="flex-grow">&copy; Ecopass.pl - Wszelkie prawa zastrzeżone</span>
          <span>Regulamin</span>
          <span>Polityka prywatności</span>
        </div>
      </footer>
    </>
  );
}
