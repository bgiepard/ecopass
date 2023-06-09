import Layout from 'components/Layout';
import Post from 'components/Post';
import { getAllPosts } from 'services/posts';

export const getStaticProps = () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
};

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="flex gap-5 flex-wrap gap-y-10 m-10">
        {posts.map((post) => {
          return <Post post={post} key={post.slug} />;
        })}
      </div>
    </Layout>
  );
}
