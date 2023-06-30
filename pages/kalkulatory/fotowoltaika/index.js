import React, { useEffect, useState } from 'react';
import photovol from '../../../assets/Light-bulb.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';
import calc from '../../../assets/Financial-Management.svg';
import banner from 'public/banner.png';

const seoData = {
  title: 'Kalkulator doboru mocy fotowoltaiki - EcoPass.pl',
  description:
    'Nasz kalkulator doboru mocy fotowoltaiki pomoże Ci określić odpowiednią moc instalacji fotowoltaicznej dla Twojego domu lub przedsiębiorstwa.',
  url: 'https://ecopass.pl/kalkulatory/fotowoltaika',
  image: '/banner.png',
  tags: [
    'kalkulatory',
    'kalkulator mocy fotowoltaiki',
    'jak obliczyć moc fotowoltaiki',
    'fotowoltaika'
  ]
};

export default function PhotovoltaicsCalculator() {
  const [usage, setUsage] = useState('');
  const [unit, setUnit] = useState('zł');
  const [result, setResult] = useState(0);
  const [estimatedPower, setEstimatedPower] = useState(0);
  const [estimatedIncome, setEstimatedIncome] = useState(0);
  const [estimatedSavings, setEstimatedSavings] = useState(0);

  useEffect(() => {
    if (unit === 'zł') {
      setEstimatedPower(((usage * 12 * 2) / 1000).toFixed(1));
      setResult(Math.ceil((usage * 12 * 2) / 450));
      setEstimatedIncome(usage * 12 * 2);
      setEstimatedSavings((usage * 12 * 2 * 0.79).toFixed(2));
    } else {
      setEstimatedPower(((usage * 12) / 1000).toFixed(1));
      setResult(Math.ceil((usage * 12) / 450));
      setEstimatedIncome((usage * 12).toFixed(2));
      setEstimatedSavings((usage * 12 * 0.79).toFixed(2));
    }
  }, [usage, unit]);

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
            image: seoData.image
          })}
        </script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <div className="bg-primary border-t-2">
          <div className="container m-auto">
            <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
              Kalkulator mocy fotowoltaiki
            </h1>
          </div>
        </div>
        <div className="container p-[50px] flex gap-[50px] mt-[50px] sm:flex-row flex-col justify-center items-center">
          <Image
            src={photovol}
            alt="kalkulator doboru mocy fotowoltaiki"
            width={300}
            height={'auto'}
          />
          <div className="sm:w-1/2 w-[90vw]">
            <p>
              Nasz kalkulator doboru mocy fotowoltaiki pomoże Ci określić odpowiednią moc instalacji
              fotowoltaicznej dla Twojego domu lub przedsiębiorstwa. Wprowadź informacje dotyczące
              swojego miejsca zamieszkania, roczne zużycie energii elektrycznej oraz dostępną
              powierzchnię na instalację paneli słonecznych. Kalkulator pokaże Ci minimalną ilość
              paneli oraz sugerowaną moc instalacji, która pomoże Ci wyprodukować wystarczającą
              ilość energii elektrycznej i oszczędzić na rachunkach za prąd.
            </p>
          </div>
        </div>
        <div className="sm:max-w-[60vw] border-2 mt-[50px] border-white bg-white max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col">
          <div className="flex flex-col lg:flex-row gap-3 justify-center items-center">
            <label htmlFor="usage">Podaj miesięczne zużycie prądu:</label>
            <div>
              <input
                value={usage}
                type="number"
                id="usage"
                onChange={(e) => setUsage(e.target.value)}
                style={{ borderRadius: '12px 0 0 12px' }}
                className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary"
                aria-label="Podaj miesięczne zużycie prądu"
                aria-describedby="usage-description"
              />
              <select
                onChange={(e) => setUnit(e.target.value)}
                style={{ borderRadius: '0 12px 12px 0' }}
                className="border-2 p-1 border-secondary bg-secondary text-white font-bold shadow-sm"
                aria-label="Wybierz jednostkę">
                <option value="zł">zł</option>
                <option value="kWh">kWh</option>
              </select>
            </div>
          </div>
          {usage && (
            <div
              className="mt-20 flex lg:flex-row flex-col lg:justify-between items-center gap-10"
              id="usage-description">
              <div className="flex flex-col gap-5 font-bold">
                <span>Minimalna ilość paneli: {result}</span>
                <span>Sugerowana moc instalacji fotowoltaicznej: {estimatedPower}kW</span>
                <span>Szacunkowa ilość wyprodukowanego prądu rocznie: {estimatedIncome}kWh</span>
                <span>Szacunkowy dochód roczny z instalacji: {estimatedSavings}zł</span>
              </div>
              <Image src={calc} alt="kalkulator" width={200} height={'auto'} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
