import Head from 'next/head';
import Layout from 'components/Layout';
import HomePageSlider from '../components/HomePageSlider';
import Post from 'components/Post';
import categories from 'services/categories';
import { useState } from 'react';
import { getAllPosts } from 'services/posts';
import banner from 'public/banner.png';
import Newsletter from 'components/Newsletter';

const seoData = {
  title: 'EcoPass.pl - Zmniejsz rachunki i zacznij biernie oszczędzać',
  description:
    'Oszczędzanie, ekologia, zmniejszenie rachunków. Poradniki, artykuły i kalkulatory w jednym miejscu.',
  url: 'https://ecopass.pl',
  image: banner,
  tags: ['bierne oszczędzanie', 'ekologia', 'poradniki', 'dom energooszczędny']
};

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
};

export default function Home({ posts }) {
  const [category, setCategory] = useState(null);

  const displayedPosts = category ? posts.filter((post) => post.tags.includes(category)) : posts;

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            url: seoData.url,
            name: seoData.title,
            description: seoData.description,
            image: seoData.image,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Artykuły - EcoPass.pl',
                item: `${seoData.url}/blog`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Produkty - EcoPass.pl',
                item: `${seoData.url}/produkty`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Kalkulatory - EcoPass.pl',
                item: `${seoData.url}/kalkulatory`
              }
            ]
          })}
        </script>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Layout>
        {/*Hero*/}
        <div className="bg-primary">
          <div className="container">
            <HomePageSlider />
          </div>
        </div>
        {/*Posts*/}
        <div className="container mt-[50px] mb-[50px] md:mb-[100px] md:mt-[100px]">
          <div className="mb-10 flex items-center flex-col md:flex-row">
            <h1 className="whitespace-nowrap font-bold text-4xl opacity-80 mb-8 md:mb-0">
              Ostatnie artykuły
            </h1>
            <div className="flex md:ml-10 items-center gap-x-3 gap-y-3 flex-wrap">
              {categories.map((item) => {
                return (
                  <button
                    key={item.id}
                    value={item.value}
                    aria-label="filtrowanie artykułów"
                    className={`whitespace-nowrap p-2 pt-1 pb-1 md:p-4 md:pt-2 md:pb-1 text-[12px] md:text-[16px] rounded-2xl bg-white shadow-lg font-bold hover:shadow-xl border-2 ${
                      item.value === category ? ' border-secondary' : ''
                    }`}
                    onClick={() => setCategory(item.value)}>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex gap-5 flex-wrap gap-y-10">
            {displayedPosts.slice(0, 8).map((post) => {
              return <Post post={post} key={post.slug} />;
            })}
          </div>
        </div>
        <Newsletter />
      </Layout>
    </>
  );
}
