import Layout from 'components/Layout';
import Product from 'components/Product';
import { getList } from 'lib/markdownParser';
import Head from 'next/head';
import React, { useState } from 'react';
import ProductsNav from 'components/ProductsNav';

const seoData = {
  title: 'Produkty - EcoPass.pl',
  description:
    'Odkryj naszą różnorodną kolekcję wysokiej jakości produktów, dostępnych w naszym sklepie.',
  url: 'https://ecopass.pl/produkty',
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
  const [category, setCategory] = useState('');
  const [sub, setSub] = useState('');

  const displayedProducts = products.filter((prod) => {
    if (category === 'Wszystkie') {
      return true;
    } else if (category !== '' && sub !== '') {
      return (
        prod.category && prod.category.includes(category) && prod.sub && prod.sub.includes(sub)
      );
    } else if (category !== '') {
      return prod.category && prod.category.includes(category);
    } else if (sub !== '') {
      return prod.sub && prod.sub.includes(sub);
    } else {
      return true;
    }
  });

  const categoryCounts = {};
  const subCategoryCounts = {};

  products.forEach((product) => {
    const productCategory = product.category;
    const productSubCategory = product.sub;

    if (productCategory) {
      categoryCounts[productCategory] = (categoryCounts[productCategory] || 0) + 1;
    }

    if (productSubCategory) {
      subCategoryCounts[productSubCategory] = (subCategoryCounts[productSubCategory] || 0) + 1;
    }
  });
  const totalProductCount = products.length;

  const structuredData = {
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
        image: `https://ecopass.pl${product.src}`,
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
              value: product.shipping,
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
  };

  const dataString = JSON.stringify(structuredData);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: dataString }}></script>

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
        <div className="container m-auto flex gap-10 lg:flex-row flex-col">
          <ProductsNav
            setCategory={setCategory}
            setSub={setSub}
            categoryCounts={categoryCounts}
            subCategoryCounts={subCategoryCounts}
            totalProductCount={totalProductCount}
          />
          <div className="flex gap-5 flex-wrap gap-y-10 mb-[50px]">
            {displayedProducts.map((p) => {
              return <Product product={p} key={`key-${p.name + p.id}`} />;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
