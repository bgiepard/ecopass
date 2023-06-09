import { getList } from '../lib/markdownParser';

export const getAllPosts = () => {
  const posts = getList('_data');

  const sortedPosts = posts.sort((a, b) => a.createdAt - b.createdAt).reverse();

  return sortedPosts;
};
