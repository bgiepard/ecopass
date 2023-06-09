import { getList } from '../lib/markdownParser';

export const getRecentPosts = () => {
  const posts = getList('_data');

  const sortedPosts = posts
    .sort((a, b) => a.createdAt - b.createdAt)
    .reverse()
    .slice(0, 8);

  return sortedPosts;
};
