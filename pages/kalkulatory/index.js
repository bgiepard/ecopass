import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import calc from '../../assets/Financial-Management.svg';
import photovol from '../../assets/Light-bulb.svg';
import heat from '../../assets/Air-conditioner-repair.svg';
import termo from '../../assets/Home-Repairing.svg';
import Link from 'next/link';

const data = [
  {
    id: 1,
    src: photovol,
    title: 'Kalkulator doboru mocy fotowoltaiki',
    path: 'fotowoltaika'
  },
  {
    id: 2,
    src: heat,
    title: 'Kalkulator doboru pompy ciepła',
    path: 'pompy-ciepla'
  },
  {
    id: 3,
    src: termo,
    title: 'Kalkulator zużycia farb termoizolacyjnych',
    path: 'termoizolacja'
  }
];

export default function Calculator() {
  return (
    <Layout>
      <Head>
        <title>Kalkulatory - EcoPass.pl</title>
        <meta
          name="description"
          content="Wykorzystaj nasze narzędzia, aby obliczyć zużycie farb, dobór mocy instalacji
            fotowoltaicznej i optymalną moc pompy ciepła."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
            Kalkulatory
          </h1>
        </div>
      </div>
      <div className="container p-[50px] flex gap-[50px] sm:flex-row flex-col justify-center items-center">
        <Image src={calc} alt="kalkulatory" width={400} height={'auto'} />
        <div className="sm:w-1/2 w-[90vw]">
          <p>
            Wykorzystaj nasze narzędzia, aby obliczyć zużycie farb, dobór mocy instalacji
            fotowoltaicznej i optymalną moc pompy ciepła. Znajdź rozwiązania, które pozwolą Ci
            oszczędzać energię i poprawić efektywność energetyczną Twojego budynku. Oszczędzaj,
            chroniąc zarówno środowisko, jak i swój portfel.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 container justify-evenly items-center mb-[50px]">
        {data.map((d) => {
          return (
            <Link
              href={`/kalkulatory/${d.path}`}
              className="bg-white border-2 border-white shadow-md hover:shadow-lg rounded-lg p-5 sm:w-[350px] w-[90vw] h-[270px] flex flex-col justify-center items-center gap-5"
              key={d.id}>
              <Image src={d.src} width={200} height={'auto'} alt={d.title} />
              <h2 className="text-md font-bold text-center">{d.title}</h2>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
