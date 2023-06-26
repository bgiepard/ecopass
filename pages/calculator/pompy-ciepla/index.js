import React from 'react';
import heat from '../../../assets/Air-conditioner-repair.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';

export default function HeatPumpsCalculator() {
  return (
    <Layout>
      <Head>
        <title>Kalkulator doboru pompy ciepła - EcoPass.pl</title>
      </Head>
      <div className="container p-[50px] flex gap-[50px] sm:flex-row flex-col justify-center items-center">
        <Image src={heat} alt="kalkulator doboru pompy ciepła" width={300} height={'auto'} />

        <div className="sm:w-1/2 w-[90vw]">
          <p>
            Nasz kalkulator doboru pomp ciepła pomoże Ci określić odpowiednią moc pompy ciepła dla
            Twojego budynku. Pompy ciepła są efektywnym rozwiązaniem do ogrzewania i chłodzenia,
            wykorzystującym energię odnawialną. Wprowadź informacje dotyczące wielkości pomieszczeń,
            poziomu izolacji budynku oraz preferowanej temperatury wewnątrz. Kalkulator wskaże Ci
            odpowiednią moc pompy ciepła, która zapewni komfort termiczny i efektywne zużycie
            energii.
          </p>
        </div>
      </div>
    </Layout>
  );
}
