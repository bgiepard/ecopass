import Head from 'next/head';
import { getFileBySlug, getList } from '../../lib/markdownParser';
import { getListOfArticles } from '../../services/articles';
import Layout from 'components/Layout';
import FeaturedProducts from 'components/FeaturedProducts';
import ContactForm from 'components/ContactForm';

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
  const modifiedCategory =
    article.tags[0] === 'pompy ciepła'
      ? article.tags[0].replace(/\s/g, '-').replace(/ł/g, 'l')
      : article.tags[0] === 'dofinansowania'
      ? 'leads'
      : article.tags[0];

  const fullTitle = `${article.title} ${article.title_second_line}`;
  const fullDescription = `${article.description} ${article.tags.join(', ')}`;

  return (
    <Layout>
      <Head>
        <title>{`${fullTitle} - EcoPass.pl`}</title>
        <meta name="description" content={fullDescription} />
        <meta itemProp="name" content={fullTitle} />
        <meta itemProp="description" content={fullDescription} />
        <meta itemProp="image" content={article.cover} />
        <meta property="og:url" content={article.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={fullDescription} />
        <meta property="og:image" content={article.cover} />
        <meta property="og:image:alt" content={fullTitle} />
        {article.tags && article.tags.length > 0 && (
          <meta property="article:tag" content={article.tags.join(', ')} />
        )}
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="sm:text-[40px] sm:leading-[45px] text-2xl font-bold text-white pt-[80px] pb-[50px] sm:pr-[50px] sm:w-2/3">
            {article.title}
            <br />
            {article.title_second_line ? article.title_second_line : null}
          </h1>
        </div>
      </div>

      <div className="container m-auto flex md:flex-row flex-col">
        <div
          className="md:max-w-[66%] sm:text-[16px] sm:leading-[25px] text-sm pt-[50px] pb-[50px] sm:pr-[80px] prose"
          dangerouslySetInnerHTML={{ __html: article.content }}
          role="main"></div>
        <aside className="sm:w-full py-[50px]">
          <h2 className="text-2xl font-bold pt-[50px] sm:pt-2">Polecane produkty</h2>
          {products.map((product) => {
            return <FeaturedProducts product={product} key={product.slug} />;
          })}
        </aside>
      </div>
      <ContactForm category={modifiedCategory} />
    </Layout>
  );
};

export default Articles;
