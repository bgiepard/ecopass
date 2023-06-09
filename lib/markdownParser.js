import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: file.replace('.md', ''),
      createdAt: data.date ? Number(new Date(data.date)) : null
    };
  });
};

export const getFileBySlug = async (path, slug) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = readFileSync(fullPath, 'utf-8');

  const { data, content: markdownContent } = matter(fileContents);
  let content = '';

  if (markdownContent) {
    const processedContent = await remark().use(html).process(markdownContent);
    content = processedContent.toString().replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, src) => {
      return `<img src="${src}" alt="${alt}" />`;
    });
  }

  return {
    ...data,
    content,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null
  };
};
