import Layout from 'components/Layout';
import React from 'react';
import reku from '../../../assets/recuperation.png';
import Head from 'next/head';
import Image from 'next/image';

const seoData = {
  title: 'Kalkulator doboru rekuperatora - EcoPass.pl',
  description:
    'Nasz kalkulator doboru rekuperatora ściennego to narzędzie, które pomaga użytkownikom dokładnie określić odpowiednie parametry rekuperatora wentylacyjnego do ich pomieszczeń.',
  url: 'https://ecopass.pl/kalkulatory/rekuperatory',
  image: 'public/banner.png',
  tags: ['kalkulator', 'jak dobrać moc rekuperatora', 'jaki rekuperator wybrać', 'rekuperator']
};

export default function Recuperators() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPageElement',
    url: seoData.url,
    name: seoData.title,
    description: seoData.description,
    image: seoData.image
  };

  const dataString = JSON.stringify(structuredData);

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta itemProp="name" content={seoData.title} />
        <meta itemProp="description" content={seoData.description} />
        <meta itemProp="image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="WebPage" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:alt" content={seoData.title} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: dataString }}></script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <div className="bg-primary border-t-2">
          <div className="container m-auto">
            <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
              Kalkulator doboru rekuperatora
            </h1>
          </div>
        </div>
        <div className="container p-[50px] flex gap-[50px] mt-[50px] sm:flex-row flex-col justify-center items-center">
          <Image src={reku} alt="kalkulator doboru rekuperatora" width={300} height={'auto'} />

          <div className="sm:w-1/2 w-[90vw]">
            <p>
              Nasz kalkulator doboru rekuperatora ściennego to narzędzie, które pomaga użytkownikom
              dokładnie określić odpowiednie parametry rekuperatora ściennego do ich pomieszczeń.
              Działa on na zasadzie wprowadzania danych dotyczących przeznaczenia pomieszczenia oraz
              ilości domowników, a następnie dostarcza rekomendacje dotyczące najlepszego rodzaju
              rekuperatora.
            </p>
          </div>
        </div>
        <div className="sm:max-w-[50vw] mt-[50px] border-2 border-white bg-white max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col gap-2">
          <label htmlFor="number">
            Ile osób przeważnie przebywa w pomieszczeniu, gdzie będzie montowany rekuperator?
          </label>
          <input
            type="number"
            id="number"
            aria-label="Ile osób przeważnie przebywa w pomieszczeniu, gdzie będzie montowany rekuperator?"
            className="border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl mb-3"
          />
          <label htmlFor="type">
            Jaką funkcję pełni pomieszczenie, gdzie będzie montowany rekuperator?
          </label>
          <select
            id="type"
            aria-label="Jaką funkcję pełni pomieszczenie, gdzie będzie montowany rekuperator?"
            className="sm:w-[250px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl mb-3">
            <option>Wybierz...</option>
            <option>Salon</option>
            <option>Sypialnia</option>
            <option>Kuchnia</option>
            <option>Łazienka</option>
          </select>
          <label htmlFor="size">
            Jakiej wielkości jest pomieszczenie, w którym rozważana jest rekuperacja (m2)?
          </label>
          <input
            placeholder="m2"
            type="number"
            id="size"
            aria-label="Jakiej wielkości jest pomieszczenie, w którym rozważana jest rekuperacja?"
            className="border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl mb-3"
          />
          <label htmlFor="ventilation">Czy jest i jaki jest obecnie rodzaj wentylacji?</label>
          <select
            id="ventilation"
            aria-label="Czy jest i jaki jest obecnie rodzaj wentylacji?"
            className="sm:w-[250px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl mb-3">
            <option>Wybierz...</option>
            <option>Brak</option>
            <option>Grawitacyjna</option>
            <option>Nawiewna</option>
          </select>
          <label htmlFor="fireplace">
            Czy jest kominek i czy jest z otwartą, czy zamkniętą komorą spalania?
          </label>
          <select
            id="fireplace"
            aria-label="Czy jest kominek i czy jest z otwartą, czy zamkniętą komorą spalania?"
            className="sm:w-[250px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl mb-3">
            <option>Wybierz...</option>
            <option>Nie ma kominka</option>
            <option>Otwarta komora spalania</option>
            <option>Zamknięta komora spalania</option>
          </select>
          <p>Czy występują:</p>
          <label className="w-fit cursor-pointer">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            Wilgoć
          </label>
          <label className="w-fit cursor-pointer">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            Grzyb
          </label>
          <label className="w-fit cursor-pointer">
            <input type="checkbox" className="mr-3 cursor-pointer" />
            Parowanie okien
          </label>
        </div>
      </Layout>
    </>
  );
}
