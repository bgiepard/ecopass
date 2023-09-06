import Head from 'next/head';
import { getFileBySlug, getList } from '../../lib/markdownParser';
import { getListOfArticles } from '../../services/articles';
import Layout from 'components/Layout';
import FeaturedProducts from 'components/FeaturedProducts';
import ContactForm from 'components/ContactForm';
import { useEffect, useState } from 'react';
import { calculateTimeAgo } from 'services/timeAgo';
import ShareButtons from 'components/ShareButtons';

export const getStaticPaths = () => {
  const articles = getListOfArticles();

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getFileBySlug('_data', slug);
  const products = getList('_productData').reverse();

  return {
    props: { article, products }
  };
};

const Articles = ({ article, products }) => {
  const [readingTimeText, setReadingTimeText] = useState('');
  const [timeAgoText, setTimeAgoText] = useState('');

  useEffect(() => {
    const countWords = article.content.trim().split(/\s+/).length;
    const calculateReadingTime = Math.ceil(countWords / 200);

    let minutesText;
    if (calculateReadingTime === 1) {
      minutesText = 'minuta';
    } else if (
      calculateReadingTime % 10 === 2 ||
      calculateReadingTime % 10 === 3 ||
      calculateReadingTime % 10 === 4
    ) {
      minutesText = 'minuty';
    } else {
      minutesText = 'minut';
    }
    setReadingTimeText(`${calculateReadingTime} ${minutesText}`);

    const timeAgo = calculateTimeAgo(article.date);
    setTimeAgoText(timeAgo);
  }, []);

  const modifiedCategory =
    article.tags[0] === 'pompy ciepła'
      ? article.tags[0].replace(/\s/g, '-').replace(/ł/g, 'l')
      : article.tags[0] === 'dofinansowania' || article.tags[0] === 'elektrownie wiatrowe'
      ? 'leads'
      : article.tags[0];

  const fullTitle = `${article.title} ${article.title_second_line}`;
  const fullDescription = `${article.description}}`;

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.slug
    },
    headline: fullTitle,
    description: fullDescription,
    image: article.cover,
    publisher: {
      '@type': 'Organization',
      name: 'EcoPass'
    },
    author: {
      '@type': 'Organization',
      name: 'EcoPass',
      url: 'https://www.facebook.com/ecopass1'
    },
    articleSection: article.tags.join(', '),
    url: `https://ecopass.pl/blog/${article.slug}`
  };

  return (
    <>
      <Head>
        <title>{`${fullTitle} - EcoPass.pl`}</title>
        <meta name="description" content={fullDescription} />
        <meta itemProp="name" content={fullTitle} />
        <meta itemProp="description" content={fullDescription} />
        <meta itemProp="image" content={article.cover} />
        <meta property="og:url" content={article.slug} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={article.cover} />
        <meta property="og:image:alt" content={fullTitle} />
        {article.tags && article.tags.length > 0 && (
          <meta property="article:tag" content={article.tags.join(', ')} />
        )}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <div
          className=" bg-primary border-t-2 w-full bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(/backgrounds/${modifiedCategory}.png)`
          }}>
          <div className="w-full h-full backdrop-brightness-[30%] backdrop-blur-sm">
            <div className="container m-auto">
              <h1 className="sm:text-[40px] sm:leading-[45px] text-2xl font-bold text-white pt-[80px] pb-[30px] sm:pr-[50px] sm:w-2/3">
                {article.title}
                <br />
                {article.title_second_line ? article.title_second_line : null}
              </h1>
              <div className="flex lg:flex-row flex-col lg:gap-5 py-2">
                <p className="text-white text-sm">Czas czytania: {readingTimeText}</p>
                <p className="text-white text-sm">Dodano: {timeAgoText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-auto flex md:flex-row flex-col">
          <div className="md:max-w-[66%] pt-[50px] pb-[50px] sm:pr-[80px]">
            <div
              className="sm:text-[16px] max-w-full sm:leading-[25px] text-sm prose"
              dangerouslySetInnerHTML={{ __html: article.content }}
              role="main"></div>
            <div className="mt-[50px]">
              <span className="font-semibold">
                Podobał Ci się ten artykuł? Podziel się nim na swoich mediach społecznościowych:
              </span>
              <ShareButtons />
            </div>
          </div>
          <aside className="sm:w-full py-[50px]">
            <h2 className="text-2xl font-bold pt-[50px] sm:pt-2">Polecane produkty</h2>
            {(() => {
              const filteredProducts = products.filter((product) => {
                const lowerCaseCategory = product.category.toLowerCase();
                const articleTag = article.tags[0].toLowerCase();
                return lowerCaseCategory.includes(articleTag);
              });

              if (filteredProducts.length > 0) {
                return filteredProducts
                  .slice(0, 5)
                  .map((product) => <FeaturedProducts product={product} key={product.slug} />);
              } else {
                return products
                  .slice(0, 5)
                  .map((product) => <FeaturedProducts product={product} key={product.slug} />);
              }
            })()}
          </aside>
        </div>
        <ContactForm category={modifiedCategory} />
      </Layout>
    </>
  );
};

export default Articles;
