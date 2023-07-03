import Layout from 'components/Layout';
import Product from 'components/Product';
import { getList } from 'lib/markdownParser';
import Head from 'next/head';
import React, { useState } from 'react';
import banner from 'public/banner.png';

const seoData = {
  title: 'Produkty - EcoPass.pl',
  description:
    'Odkryj naszą różnorodną kolekcję wysokiej jakości produktów, dostępnych w naszym sklepie.',
  url: 'https://ecopass.pl/produkty',
  image: banner,
  tags: ['termoizolacja', 'farby termoizolacyjne', 'dom energooszczędny', 'oszczędzanie']
};

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
            '@type': 'ItemList',
            itemListElement: products.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Product',
                url: `https://ecopass.pl/produkty/${product.link}`,
                name: product.name,
                description: product.description,
                image: product.src,
                brand: {
                  '@type': 'Brand',
                  name: product.brand
                },
                offers: {
                  '@type': 'Offer',
                  price: product.price_min,
                  priceCurrency: 'PLN',
                  availability: 'https://schema.org/InStoreOnly',
                  itemCondition: 'https://schema.org/NewCondition',
                  hasMerchantReturnPolicy: {
                    '@type': 'MerchantReturnPolicy',
                    applicableCountry: 'PL',
                    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                    merchantReturnDays: 30,
                    returnMethod: 'https://schema.org/ReturnByMail'
                  },
                  shippingDetails: {
                    '@type': 'OfferShippingDetails',
                    shippingRate: {
                      '@type': 'MonetaryAmount',
                      value: 24.99,
                      currency: 'PLN'
                    },
                    shippingDestination: {
                      '@type': 'DefinedRegion',
                      addressCountry: 'PL'
                    },
                    deliveryTime: {
                      '@type': 'ShippingDeliveryTime',
                      handlingTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 0,
                        maxValue: 3,
                        unitCode: 'DAY'
                      },
                      transitTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 1,
                        maxValue: 5,
                        unitCode: 'DAY'
                      }
                    }
                  }
                }
              }
            }))
          })}
        </script>

        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
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
    </>
  );
}
