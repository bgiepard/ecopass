import { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Post from 'components/Post';
import Head from 'next/head';
import { getAllPosts } from 'services/posts';
import categories from 'services/categories';
import banner from 'public/banner.png';

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
};

export default function Blog({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(null);
  const pageSize = 8;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const displayedPosts = category
    ? posts.filter((post) => post.tags.includes(category)).slice(startIndex, endIndex)
    : posts.slice(startIndex, endIndex);

  const filteredPosts = category ? posts.filter((post) => post.tags.includes(category)) : posts;
  const totalPages = Math.ceil(filteredPosts.length / pageSize);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const seoData = {
    title: 'EcoPass.pl - artykuły',
    description:
      'Odkryj fascynujący świat alternatywnych źródeł energii i zrównoważonego rozwoju na EcoPass.pl.',
    url: 'https://ecopass.pl/blog',
    image: banner,
    tags: ['oszczędzanie', 'artykuły', 'zrównoważony rozwój', 'dom pasywny']
  };

  return (
    <>
      <Head>
        <title>EcoPass.pl - artykuły</title>
        <meta
          name="description"
          content="Odkryj fascynujący świat alternatywnych źródeł energii i zrównoważonego rozwoju na EcoPass.pl."
        />
        <meta itemProp="name" content={seoData.title} />
        <meta itemProp="description" content={seoData.description} />
        <meta itemProp="image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
        <meta property="og:type" content="BlogPosting" />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:image:alt" content={seoData.title} />
        <link rel="icon" href="/icon.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: posts.map((post, index) => ({
              '@type': 'BlogPosting',
              position: index + 1,
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${seoData.url}/${post.slug}`
              },
              headline: post.title,
              image: post.cover
            }))
          })}
        </script>
      </Head>
      <Layout>
        <div className="bg-primary border-t-2">
          <div className="container m-auto">
            <h1 className="sm:text-[30px] sm:leading-[45px] text-2xl font-bold text-white py-[30px] sm:pr-[50px] sm:w-2/3">
              Artykuły
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center gap-x-3 gap-y-3 flex-wrap mt-10">
            {categories.map((item) => (
              <button
                key={item.id}
                value={item.value}
                aria-label="przyciski filtrujące artykuły"
                className={`whitespace-nowrap p-2 pt-1 pb-1 md:p-4 md:pt-2 md:pb-1 text-[12px] md:text-[16px] rounded-2xl bg-white shadow-lg font-bold hover:shadow-xl border-2 ${
                  item.value === category ? ' border-secondary' : ''
                }`}
                onClick={() => setCategory(item.value)}>
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex gap-5 flex-wrap gap-y-10 mt-10">
            {displayedPosts.map((post) => (
              <Post post={post} key={post.slug} />
            ))}
          </div>
          <div className="my-8 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                aria-label="kolejna strona"
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`mx-1 rounded px-2 py-1 ${
                  currentPage === i + 1 ? 'bg-primary text-white' : 'bg-gray-300'
                }`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
