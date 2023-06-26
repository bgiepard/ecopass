import React from 'react';
import thermo from '../../../assets/Home-Repairing.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';

export default function ThermalInsulationCalculator() {
  return (
    <Layout>
      <Head>
        <title>Kalkulator zużycia farb termoizolacyjnych - EcoPass.pl</title>
      </Head>
      <div className="container p-[50px] flex gap-[50px] sm:flex-row flex-col justify-center items-center">
        <Image
          src={thermo}
          alt="kalkulator zużycia farb termoizolacyjnych"
          width={300}
          height={'auto'}
        />
        <div className="sm:w-1/2 w-[90vw]">
          <p>
            Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby potrzebnej
            do pokrycia powierzchni Twojego budynku. Farby termoizolacyjne są doskonałym narzędziem
            do poprawy izolacji termicznej i zmniejszenia strat energii. Wprowadź wymiary swojego
            budynku, a kalkulator poda Ci orientacyjną ilość farby potrzebną do pokrycia powierzchni
            w celu uzyskania optymalnej izolacji termicznej.
          </p>
        </div>
      </div>
    </Layout>
  );
}
