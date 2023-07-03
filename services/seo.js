import React from 'react';
import { getAllPosts } from './posts';
import banner from 'public/banner.png';
import { getList } from 'lib/markdownParser';
import photovol from '../../assets/Light-bulb.svg';
import heat from '../../assets/Air-conditioner-repair.svg';
import termo from '../../assets/Home-Repairing.svg';
import banner from 'public/banner.png';

export const getStaticProps = () => {
  const posts = getAllPosts();
  const products = getList('_productData').reverse();

  return {
    props: { posts, products }
  };
};

export default function Seo({ posts, products }) {
  const seoDataMain = {
    title: 'EcoPass.pl - Zmniejsz rachunki i zacznij biernie oszczędzać',
    description:
      'Oszczędzanie, ekologia, zmniejszenie rachunków. Poradniki, artykuły i kalkulatory w jednym miejscu.',
    url: 'https://ecopass.pl',
    image: banner,
    tags: ['bierne oszczędzanie', 'ekologia', 'poradniki', 'dom energooszczędny']
  };

  const seoDataArticles = {
    title: 'Artykuły - EcoPass.pl',
    description:
      'Odkryj fascynujący świat alternatywnych źródeł energii i zrównoważonego rozwoju na EcoPass.pl',
    tags: ['oszczędzanie', 'artykuły', 'zrównoważony rozwój', 'dom pasywny']
  };

  const seoDataProducts = {
    title: 'Produkty - EcoPass.pl',
    description:
      'Odkryj naszą różnorodną kolekcję wysokiej jakości produktów, dostępnych w naszym sklepie.',
    tags: ['termoizolacja', 'farby termoizolacyjne', 'dom energooszczędny', 'oszczędzanie']
  };

  const data = [
    {
      id: 1,
      src: photovol,
      title: 'Kalkulator doboru mocy fotowoltaiki',
      path: 'fotowoltaika',
      desc: 'Nasz kalkulator doboru mocy fotowoltaiki pomoże Ci określić odpowiednią moc instalacji fotowoltaicznej dla Twojego domu lub przedsiębiorstwa.'
    },
    {
      id: 2,
      src: heat,
      title: 'Kalkulator doboru pompy ciepła',
      path: 'pompy-ciepla',
      desc: 'Nasz kalkulator doboru pompy ciepła pomoże Ci określić odpowiednią moc pompy ciepła dla Twojego budynku.'
    },
    {
      id: 3,
      src: termo,
      title: 'Kalkulator zużycia farb termoizolacyjnych',
      path: 'termoizolacja',
      desc: 'Nasz kalkulator zużycia farb termoizolacyjnych pomoże Ci obliczyć ilość farby potrzebnej do pokrycia powierzchni Twojego budynku.'
    }
  ];

  const seoDataCalc = {
    title: 'Kalkulatory - EcoPass.pl',
    description:
      'Wykorzystaj nasze narzędzia, aby obliczyć zużycie farb, dobór mocy instalacji fotowoltaicznej i optymalną moc pompy ciepła.',
    tags: ['kalkulatory', 'oszczędzanie', 'alternatywne źródła energii', 'dom pasywny']
  };

  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          url: seoDataMain.url,
          name: seoDataMain.title,
          description: seoDataMain.description,
          image: seoDataMain.image,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Articles',
              description: seoDataArticles.description,
              image: seoDataMain.image,
              item: `${seoDataMain.url}/blog`,
              itemListElement: posts.map((post, index) => ({
                '@type': 'BlogPosting',
                position: index + 1,
                mainEntityOfPage: {
                  '@type': 'WebPage',
                  '@id': `${seoDataMain.url}/blog/${post.slug}`
                },
                headline: `${post.title} ${post.title_second_line}`,
                image: post.cover,
                description: post.description,
                author: {
                  '@type': 'Organization',
                  name: 'EcoPass',
                  url: 'https://www.facebook.com/ecopass1'
                },
                articleSection: post.tags.join(', '),
                url: `${seoDataMain.url}/blog/${post.slug}`,
                publisher: {
                  '@type': 'Organization',
                  name: 'EcoPass'
                }
              }))
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Products',
              item: `${seoDataMain.url}/produkty`,
              description: seoDataProducts.description,
              image: seoDataMain.image,
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
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Calculator',
              item: `${seoDataMain.url}/kalkulatory`,
              name: seoDataCalc.title,
              description: seoDataCalc.description,
              mainEntity: data.map((item, index) => ({
                '@type': 'WebPageElement',
                position: index + 1,
                name: item.title,
                url: `https://ecopass.pl/kalkulatory/${item.path}`,
                image: item.src,
                mainContentOfPage: {
                  '@type': 'WebPageElement',
                  isAccessibleForFree: true,
                  speakable: {
                    '@type': 'SpeakableSpecification',
                    xpath: [
                      'https://ecopass.pl/kalkulatory',
                      `https://ecopass.pl/kalkulatory/${item.path}`
                    ]
                  },
                  specialty: {
                    '@type': 'Calculator',
                    name: item.title,
                    description: item.desc,
                    url: `https://ecopass.pl/kalkulatory/${item.path}`
                  }
                }
              }))
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Offers',
              item: 'https://sklep.ecopass.pl/'
            }
          ]
        })}
      </script>
    </div>
  );
}
