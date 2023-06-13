import Head from 'next/head';
import { getFileBySlug } from '../../lib/markdownParser';
import { getListOfArticles } from '../../services/articles';
import Layout from 'components/Layout';

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

  return {
    props: { article }
  };
};

const Articles = ({ article }) => {
  return (
    <Layout>
      <Head>
        <title>{`Ecopass: ${article.title} ${article.title_second_line}`}</title>

        <meta name="description" content={article.description} />
        <meta itemProp="name" content={`${article.title} ${article.title_second_line}`} />
        <meta itemProp="description" content={article.description} />
        <meta itemProp="image" content={article.cover} />
        <meta property="og:url" content={article.url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${article.title} ${article.title_second_line}`} />
        <meta property="og:description" content={article.description} />
        <meta property="og:image" content={article.cover} />
        <meta property="og:image:alt" content={`${article.title} ${article.title_second_line}`} />
        {article.tags && <meta property="article:tag" content={article.tags.join(',')} />}
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="text-[40px] font-bold text-white pt-[80px] pb-[50px] pr-[50px] w-2/3">
            {article.title}
            <br />
            {article.title_second_line ? article.title_second_line : null}
          </h1>
        </div>
      </div>

      <div className="container m-auto flex">
        <div
          className="max-w-[66%] text-[16px] pt-[50px] pb-[50px] pr-[80px] prose"
          dangerouslySetInnerHTML={{ __html: article.content }}></div>
        <aside className="w-1/3">
          <h2 className="text-2xl font-bold pt-[50px]">Polecane produkty</h2>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
          <div className="border-2 w-full h-[240px] mt-10"></div>
        </aside>
      </div>
    </Layout>
  );
};

export default Articles;
