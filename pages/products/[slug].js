import React from 'react';
import Layout from 'components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { getFileBySlug, getList } from 'lib/markdownParser';
import Link from 'next/link';
import icons from 'services/icons';

export const getStaticPaths = () => {
  const products = getList('_productData');

  return {
    paths: products.map((prod) => ({ params: { slug: prod.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const product = await getFileBySlug('_productData', slug);

  return {
    props: { product }
  };
};

export default function ProductPage({ product }) {
  return (
    <Layout>
      <Head>
        <title>{`${product.name} - EcoPass.pl`}</title>
      </Head>
      <div className="bg-primary border-t-2">
        <div className="container m-auto">
          <h1 className="sm:text-[40px] sm:leading-[45px] text-2xl font-bold text-white pt-[80px] pb-[50px] sm:pr-[50px] sm:w-2/3">
            {product.name}
          </h1>
        </div>
      </div>
      <div className=" flex justify-evenly sm:flex-row flex-col">
        <Image src={product.src} width={400} height={400} alt={product.name} />
        <div className="mt-20 sm:ml-10 sm:p-0 p-3 flex flex-col gap-5 max-w-[500px]">
          <p>{product.desc_long}</p>
          <p className="text-primary text-sm">{product.category}</p>
          <div className="flex gap-2">
            {icons.map((icon) => {
              return (
                <div key={icon.id}>
                  <Image src={icon.src} alt={icon.desc} width={40} height={40} />
                </div>
              );
            })}
          </div>
          <Link href={product.link}>
            <button className="bg-primary sm:mr-0 mr-3 rounded-full float-right text-white px-3 py-2 shadow-sm hover:shadow-md">
              Zobacz w sklepie
            </button>
          </Link>
        </div>
      </div>
      <div
        className="container sm:max-w-[66%] sm:text-[16px] sm:leading-[25px] text-sm pt-[50px] pb-[50px] sm:pr-[80px] prose"
        dangerouslySetInnerHTML={{ __html: product.content }}></div>
    </Layout>
  );
}
