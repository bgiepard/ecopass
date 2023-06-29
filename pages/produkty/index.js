import Layout from 'components/Layout';
import Product from 'components/Product';
import { getList } from 'lib/markdownParser';
import Head from 'next/head';
import React, { useState } from 'react';

export const getStaticProps = () => {
  const products = getList('_productData').reverse();

  return {
    props: {
      products
    }
  };
};

export default function Products({ products }) {
  const [category, setCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Wszystkie',
      value: null
    },
    {
      id: 2,
      name: 'Farby do wnętrz',
      value: 'farby do wnętrz'
    },
    {
      id: 3,
      name: 'Farby zewnętrzne',
      value: 'farby zewnętrzne'
    },
    {
      id: 4,
      name: 'Farby dachowe',
      value: 'farby dachowe'
    },
    {
      id: 5,
      name: 'Preparaty gruntujące',
      value: 'preparaty gruntujące'
    }
  ];

  const displayedProducts = category
    ? products.filter((prod) => prod.category.toLowerCase().includes(category))
    : products;

  return (
    <Layout>
      <Head>
        <title>Produkty - EcoPass.pl</title>
        <meta
          name="description"
          content="Odkryj naszą różnorodną kolekcję wysokiej jakości produktów, dostępnych w naszym sklepie."
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
            Produkty
          </h1>
        </div>
      </div>
      <div className="container m-auto">
        <div className="py-10 flex gap-3 flex-wrap">
          {categories.map((item) => {
            return (
              <button
                key={item.id}
                value={item.value}
                aria-label="filtering products button"
                className={`whitespace-nowrap p-2 pt-1 pb-1 md:p-4 md:pt-2 md:pb-1 text-[12px] md:text-[16px] rounded-2xl bg-white shadow-lg font-bold hover:shadow-xl border-2 ${
                  item.value === category ? ' border-secondary' : ''
                }`}
                onClick={() => setCategory(item.value)}>
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="flex gap-5 flex-wrap gap-y-10 mb-[50px]">
          {displayedProducts.map((p) => {
            return <Product product={p} key={p.name} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
