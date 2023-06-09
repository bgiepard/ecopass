import Head from 'next/head';
import Layout from 'components/Layout';
import HomePageSlider from '../components/HomePageSlider';
import Post from 'components/Post';
import { getRecentPosts } from 'services/getRecent';

export const getStaticProps = () => {
  const posts = getRecentPosts();

  return {
    props: { posts }
  };
};

export default function Home({ posts }) {
  const categories = [
    {
      id: 1,
      name: 'Wszystkie',
      active: true
    },
    {
      id: 2,
      name: 'Fotowoltaika',
      active: false
    },
    {
      id: 3,
      name: 'Pompy ciepła',
      active: false
    },
    {
      id: 4,
      name: 'Dofinansowania',
      active: false
    },
    {
      id: 5,
      name: 'Termoizolacja',
      active: false
    }
  ];

  return (
    <>
      <Head>
        <title>EcoPass.pl - Zmniejsz rachunki i zacznij biernie oszczędzać</title>
        <meta name="description" content="Bierne oszczędzanie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
            <h2 className="whitespace-nowrap font-bold text-4xl opacity-80 mb-8 md:mb-0">
              Ostatnie artykuły
            </h2>
            <div className="flex md:ml-10 items-center gap-x-3 gap-y-3 flex-wrap w-full">
              {categories.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={`whitespace-nowrap p-2 pt-1 pb-1 md:p-4 md:pt-2 md:pb-1 text-[12px] md:text-[16px] rounded-2xl bg-white shadow-lg font-bold hover:shadow-xl ${
                      item.active ? 'border-2 border-secondary' : ''
                    }`}>
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex gap-5 flex-wrap gap-y-10">
            {posts.map((post) => {
              return <Post post={post} key={post.slug} />;
            })}
          </div>
        </div>

        {/*Newsletter*/}
        {/*<div className="container m-auto pt-[100px] pb-[100px] flex items-center justify-between">*/}
        {/*  <div className="w-[60%]">*/}
        {/*    <Image src={Newsletter} width="700" />*/}
        {/*  </div>*/}
        {/*  <div className="w-[40%]">*/}
        {/*    <h1 className="text-3xl font-bold w-full mb-3">Bądź na bieząco</h1>*/}

        {/*    <h1 className="text-3xl font-bold w-full mb-10">Zapisz się do naszego newslettera</h1>*/}

        {/*    <div className="flex">*/}
        {/*      <input*/}
        {/*        type="email"*/}
        {/*        placeholder="Adres email"*/}
        {/*        className="drop-shadow-xl p-3 pl-10 pr-10 rounded-2xl"*/}
        {/*      />*/}
        {/*      <button className="bg-secondary font-bold text-white p-3 pl-5 pr-5 pb-2 rounded-2xl shadow-xl">*/}
        {/*        Zapisz mnie!*/}
        {/*      </button>*/}
        {/*    </div>*/}

        {/*    <p className="text-xl mt-10">*/}
        {/*      Otrzymuj najnowsze informacje, Lorem ipsum dolor sit amet, <br /> consectetur*/}
        {/*      adipisicing elit. Modi, molestiae.*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Layout>
    </>
  );
}
