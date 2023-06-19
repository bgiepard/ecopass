import { getList } from '../lib/markdownParser';

export const getRecentPosts = () => {
  const posts = getList('_data');

  const sortedPosts = posts
    .sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));

      return dateB - dateA;
    })
    .slice(0, 8);

  return sortedPosts;
};
