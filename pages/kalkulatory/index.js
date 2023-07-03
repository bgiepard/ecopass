import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import calc from '../../assets/Financial-Management.svg';
import Link from 'next/link';
import banner from 'public/banner.png';

const data = [
  {
    id: 1,
    src: '/Light-bulb.svg',
    title: 'Kalkulator doboru mocy fotowoltaiki',
    path: 'fotowoltaika',
    desc: 'Nasz kalkulator doboru mocy fotowoltaiki pomoże Ci określić odpowiednią moc instalacji fotowoltaicznej dla Twojego domu lub przedsiębiorstwa.'
  },
  {
    id: 2,
    src: '/Air-conditioner-repair.svg',
    title: 'Kalkulator doboru pompy ciepła',
    path: 'pompy-ciepla',
    desc: 'Nasz kalkulator doboru pompy ciepła pomoże Ci określić odpowiednią moc pompy ciepła dla Twojego budynku.'
  },
  {
    id: 3,
    src: '/Home-Repairing.svg',
    title: 'Kalkulator zużycia farb termoizolacyjnych',
    path: 'termoizolacja',
    desc: 'Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby potrzebnej do pokrycia powierzchni Twojego budynku.'
  }
];

const seoData = {
  title: 'Kalkulatory - EcoPass.pl',
  description:
    'Wykorzystaj nasze narzędzia, aby obliczyć zużycie farb, dobór mocy instalacji fotowoltaicznej i optymalną moc pompy ciepła.',
  url: 'https://ecopass.pl/kalkulatory',
  image: banner,
  tags: ['kalkulatory', 'oszczędzanie', 'alternatywne źródła energii', 'dom pasywny']
};

export default function Calculator() {
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
            mainEntity: data.map((item, index) => ({
              '@type': 'WebPage',
              position: index + 1,
              name: item.title,
              description: item.desc,
              url: `${seoData.url}/${item.path}`,
              image: item.src
            }))
          })}
        </script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
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
    </>
  );
}
