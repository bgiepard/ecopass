const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { readdirSync } = require('fs');
const { join } = require('path');
const { Readable } = require('stream');

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/produkty', priority: 0.8 },
  { url: '/kalkulatory', priority: 0.9 },
  { url: '/kalkulatory/fotowoltaika', priority: 0.9 },
  { url: '/kalkulatory/pompy-ciepla', priority: 0.9 },
  { url: '/kalkulatory/termoizolacja', priority: 0.9 }
];

const getSlugs = (path) => {
  const directory = join(process.cwd(), path);
  const files = readdirSync(directory);

  return files.map((file) => file.replace('.md', ''));
};

async function generateDynamicUrls() {
  const articles = getSlugs('_data');
  const products = getSlugs('_productData');

  const formattedArticles = articles.map((slug) => ({
    url: `/blog/${slug}`,
    priority: 0.9
  }));
  const formattedProducts = products.map((slug) => ({
    url: `/produkty/${slug}`,
    priority: 0.9
  }));

  const formattedDynamicUrls = formattedArticles.concat(formattedProducts);

  return formattedDynamicUrls;
}

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://ecopass.pl' });
  const writableStream = createWriteStream('public/sitemap.xml');

  const staticReadableStream = Readable.from(urls);
  staticReadableStream.on('data', (chunk) => {
    stream.write(chunk);
  });
  staticReadableStream.on('end', () => {
    generateDynamicUrls().then((dynamicUrls) => {
      dynamicUrls.forEach((dynamicUrl) => {
        stream.write(dynamicUrl);
      });
      stream.end();
    });
  });

  const xmlString = await streamToPromise(stream);
  writableStream.write(xmlString);
  writableStream.end();
}

generateSitemap();
