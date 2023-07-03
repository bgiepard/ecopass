import React, { useState } from 'react';
import heat from '../../../assets/Air-conditioner-repair.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';
import calc from '../../../assets/Financial-Management.svg';

const seoData = {
  title: 'Kalkulator doboru pompy ciepła - EcoPass.pl',
  description:
    'Nasz kalkulator doboru pompy ciepła pomoże Ci określić odpowiednią moc pompy ciepła dla Twojego budynku.',
  url: 'https://ecopass.pl/kalkulatory/pompy-ciepla',
  image: 'public/banner.png',
  tags: [
    'kalkulatory',
    'kalkulator doboru pompy ciepła',
    'jak obliczyć moc pompy ciepła',
    'pompy ciepła'
  ]
};

export default function HeatPumpsCalculator() {
  const [surfaceArea, setSurfaceArea] = useState('');
  const [numOccupants, setNumOccupants] = useState('');
  const [energyType, setEnergyType] = useState('passive');
  const [power, setPower] = useState('');

  const calculatePower = () => {
    let basePower = 0;
    switch (energyType) {
      case 'passive':
        basePower = surfaceArea * 15;
        break;
      case 'energy-efficient':
        basePower = surfaceArea * 60;
        break;
      case 'well-insulated':
        basePower = surfaceArea * 80;
        break;
      case 'poorly-insulated':
        basePower = surfaceArea * 120;
        break;
      case 'non-insulated':
        basePower = surfaceArea * 200;
        break;
      default:
        break;
    }
    const waterHeatingPower = numOccupants * 0.25;
    const totalPower = ((basePower + waterHeatingPower) / 1000).toFixed(1);
    setPower(totalPower);
  };

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
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            url: seoData.url,
            name: seoData.title,
            description: seoData.description,
            image: seoData.image,
            mainContentOfPage: {
              '@type': 'WebPageElement',
              isAccessibleForFree: true,
              specialty: {
                '@type': 'Calculator',
                name: seoData.title,
                description: seoData.description,
                url: seoData.url
              }
            }
          })}
        </script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <div className="bg-primary border-t-2">
          <div className="container m-auto">
            <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
              Kalkulator doboru pompy ciepła
            </h1>
          </div>
        </div>
        <div className="container p-[50px] flex gap-[50px] mt-[50px] sm:flex-row flex-col justify-center items-center">
          <Image src={heat} alt="kalkulator doboru pompy ciepła" width={300} height={'auto'} />

          <div className="sm:w-1/2 w-[90vw]">
            <p>
              Nasz kalkulator doboru pompy ciepła pomoże Ci określić odpowiednią moc pompy ciepła
              dla Twojego budynku. Pompy ciepła są efektywnym rozwiązaniem do ogrzewania i
              chłodzenia, wykorzystującym energię odnawialną. Wprowadź informacje dotyczące
              wielkości pomieszczeń, poziomu izolacji budynku oraz ilości domowników. Kalkulator
              wskaże Ci odpowiednią moc pompy ciepła, która zapewni komfort termiczny i efektywne
              zużycie energii.
            </p>
          </div>
        </div>
        <div className="sm:max-w-[50vw] mt-[50px] border-2 border-white bg-white max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row lg:gap-3 gap-1 lg:items-center">
            <label htmlFor="type" className="sm:w-1/2">
              Podaj typ energetyczny budynku:
            </label>
            <select
              id="type"
              aria-label="wybierz typ energetyczny budynku"
              onChange={(e) => setEnergyType(e.target.value)}
              className="sm:w-[250px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl">
              <option value="passive">pasywny</option>
              <option value="energy-efficient">energooszczędny</option>
              <option value="well-insulated">z dobrą izolacją</option>
              <option value="poorly-insulated">starszy budynek ze słabą izolacją</option>
              <option value="non-insulated">budynek nieocieplony</option>
            </select>
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-3 gap-1 lg:items-center">
            <label htmlFor="surface" className="sm:w-1/2">
              Powierzchnia budynku(m2):
            </label>
            <input
              placeholder="m2"
              id="surface"
              aria-label="podaj powierzchnię budynku w metrach kwadratowych"
              className="border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
              type="number"
              value={surfaceArea}
              onChange={(e) => setSurfaceArea(e.target.value)}
            />
          </div>
          <div className="flex lg:flex-row flex-col lg:gap-3 gap-1 lg:items-center">
            <label htmlFor="occupants" className="sm:w-1/2">
              Liczba domowników:
            </label>
            <input
              placeholder="1"
              id="occupants"
              aria-label="podaj liczbę domowników"
              className="border-2 p-1 sm:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
              type="number"
              value={numOccupants}
              onChange={(e) => setNumOccupants(e.target.value)}
            />
          </div>
          <button
            aria-label="oblicz moc pompy ciepła"
            className="bg-secondary py-1 px-5 w-[120px] mt-[50px] text-white font-bold rounded-2xl shadow-sm hover:shadow-md self-end"
            onClick={calculatePower}>
            Oblicz
          </button>
          {power && numOccupants && surfaceArea && (
            <div className="mt-20 flex lg:flex-row flex-col lg:justify-between items-center gap-10">
              <div className="flex flex-col gap-5 font-bold">
                <span>Sugerowana moc pompy ciepła: {power}kW</span>
              </div>
              <Image src={calc} alt="kalkulator" width={200} height={'auto'} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
