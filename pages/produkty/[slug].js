import React from 'react';
import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { getFileBySlug, getList } from 'lib/markdownParser';
import Link from 'next/link';
import icons from 'services/icons';

export const getStaticPaths = () => {
  const products = getList('_productData');

  return {
    paths: products.map((prod) => ({ params: { slug: prod.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const product = await getFileBySlug('_productData', slug);

  return {
    props: { product }
  };
};

export default function ProductPage({ product }) {
  const fullTitle = `${product.name} - EcoPass.pl`;

  return (
    <Layout>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={product.description} />
        <meta itemProp="name" content={fullTitle} />
        <meta itemProp="description" content={product.description} />
        <meta itemProp="image" content={product.src} />
        <meta property="og:url" content={product.slug} />
        <meta property="og:type" content="Product" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.src} />
        <meta property="og:image:alt" content={fullTitle} />
        {product.tags && product.tags.length > 0 && (
          <meta property="product:tag" content={product.tags.join(', ')} />
        )}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            image: product.src,
            category: product.category,
            offers: {
              '@type': 'Offer',
              price: product.price_min,
              priceCurrency: 'PLN',
              availability: 'https://schema.org/InStoreOnly',
              itemCondition: 'https://schema.org/NewCondition',
              brand: {
                '@type': 'Brand',
                name: product.brand
              },
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
          })}
        </script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="sm:text-[40px] sm:leading-[45px] text-2xl font-bold text-white pt-[80px] pb-[50px] sm:pr-[50px] sm:w-2/3">
            {product.name}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className=" flex justify-evenly lg:flex-row flex-col mt-10">
          <Image src={product.src} width={500} height={300} alt={product.name} />
          <div className="mt-[50px] lg:ml-10 lg:p-0 p-3 flex flex-col gap-5 max-w-[500px]">
            <p>{product.desc_long}</p>
            <p className="text-primary text-sm">{product.category}</p>
            {product.category !== 'Rekuperatory' ? (
              <>
                {' '}
                <div className="flex gap-2">
                  {icons.map((icon) => {
                    return (
                      <div key={icon.id}>
                        <Image src={icon.src} alt={icon.desc} width={40} height={40} />
                      </div>
                    );
                  })}
                </div>
                <Link href={product.link}>
                  <button className="bg-primary lg:mr-0 mr-3 rounded-full float-right text-white px-3 py-2 shadow-sm hover:shadow-md">
                    Zobacz w sklepie
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex flex-col bg-primary rounded-full text-white w-1/2 items-center justify-center py-3 self-end">
                <span className="font-bold text-xl">Cena: {product.price_min}zł</span>
                <p>Dostawa: {product.shipping}zł</p>
                <p>kontakt@ecopass.pl</p>
                <p>tel: +48 721 704 787</p>
              </div>
            )}
          </div>
        </div>
        <div
          className="lg:max-w-[60%] sm:text-[16px] sm:leading-[25px] text-sm pt-[50px] pb-[50px] m-auto prose"
          dangerouslySetInnerHTML={{ __html: product.content }}
          role="main"></div>
      </div>
    </Layout>
  );
}
