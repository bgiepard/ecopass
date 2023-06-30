import React, { useEffect, useState } from 'react';
import thermo from '../../../assets/Home-Repairing.svg';
import Image from 'next/image';
import Layout from 'components/Layout';
import Head from 'next/head';
import calc from '../../../assets/Financial-Management.svg';
import banner from 'public/banner.png';

const seoData = {
  title: 'Kalkulator zużycia farb termoizolacyjnych - EcoPass.pl',
  description:
    'Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby potrzebnej do pokrycia powierzchni Twojego budynku.',
  url: 'https://ecopass.pl/kalkulatory/termoizolacja',
  image: banner,
  tags: [
    'kalkulatory',
    'kalkulator zużycia farb termoizolacyjnych',
    'jak obliczyć ile farby termoizolacyjnej potrzebuję',
    'farby termoizolacyjne'
  ]
};

export default function ThermalInsulationCalculator() {
  const [effect, setEffect] = useState('');
  const [thickness, setThickness] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (effect === 'insulation' || effect === 'mold') {
      setThickness(1);
    } else if (effect === 'uv') {
      setThickness(0.5);
    } else if (effect === 'steam' || effect === 'heat') {
      setThickness(3);
    }

    if (height && width && thickness) {
      setQuantity((height.replace(',', '.') * width.replace(',', '.') * thickness).toFixed(1));
    }
  }, [effect, height, width, thickness]);

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
              Kalkulator zużycia farb termoizolacyjnych
            </h1>
          </div>
        </div>
        <div className="container p-[50px] flex gap-[50px] mt-[50px] sm:flex-row flex-col justify-center items-center">
          <Image
            src={thermo}
            alt="kalkulator zużycia farb termoizolacyjnych"
            width={300}
            height={'auto'}
          />
          <div className="sm:w-1/2 w-[90vw]">
            <p>
              Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby
              potrzebnej do pokrycia powierzchni Twojego budynku. Farby termoizolacyjne są
              doskonałym narzędziem do poprawy izolacji termicznej i zmniejszenia strat energii.
              Wprowadź wymiary malowanej powierzchni, a kalkulator poda Ci orientacyjną ilość farby
              potrzebną do jej pokrycia w celu uzyskania optymalnej izolacji termicznej.
            </p>
          </div>
        </div>
        <div className="lg:max-w-[50vw] bg-white mt-[50px] max-w-[90vw] sm:p-10 p-5 mb-[50px] m-auto shadow-md rounded-2xl flex flex-col">
          <div className="flex flex-col gap-5">
            <span className="font-bold">
              Podaj wymiary powierzchni, na którą będzie nanoszony wyrób:
            </span>
            <div className="flex flex-col gap-5  ">
              <div className="flex md:flex-row flex-col gap-2 md:items-center">
                <label htmlFor="height" className="lg:w-1/3">
                  Wysokość:
                </label>
                <input
                  aria-label="podaj wysokość powierzchni na którą będzie nanoszony wyrób"
                  onChange={(e) => setHeight(e.target.value)}
                  value={height}
                  placeholder="m.b."
                  className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
                  id="height"
                />
              </div>
              <div className="flex md:flex-row flex-col gap-2 md:items-center">
                <label htmlFor="width" className="lg:w-1/3">
                  Szerokość:
                </label>
                <input
                  aria-label="podaj szerokość powierzchni na którą będzie nanoszony wyrób"
                  onChange={(e) => setWidth(e.target.value)}
                  value={width}
                  placeholder="m.b."
                  className="border-2 p-1 md:w-[150px] w-[50vw] shadow-sm focus:outline-secondary rounded-xl"
                  id="width"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-2 md:items-center">
              <label htmlFor="effect" className="lg:w-1/3">
                Pożądany efekt:
              </label>
              <select
                aria-label="wybierz jaki efekt chcesz uzyskać"
                onChange={(e) => {
                  setEffect(e.target.value);
                }}
                className="md:w-[300px] w-[80vw] focus:outline-secondary p-1 shadow-sm border-2 rounded-xl">
                <option value="">Wybierz...</option>
                <option value="insulation">Termoizolacja</option>
                <option value="mold">Zapobieganie pleśni</option>
                <option value="uv">Odbicie promieniowania</option>
                <option value="steam">Kondensacja pary wodnej</option>
                <option value="heat">Zabezpieczenie gorącej powierzchni</option>
              </select>
            </div>
          </div>

          {quantity && (
            <div className="mt-20 flex lg:flex-row flex-col lg:justify-between items-center gap-10">
              <div className="flex flex-col gap-5 font-bold">
                <span>Sugerowana grubość warstwy: {thickness}mm</span>
                <span>Ilość potrzebnego produktu: {quantity}L farby termoizolacyjnej</span>
              </div>
              <Image src={calc} alt="kalkulator" width={200} height={'auto'} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
