import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Product({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="flex flex-col h-[350px] border-2 border-white shadow-md p-3 sm:w-[340px] w-[85vw] mt-10 gap-5 hover:shadow-lg rounded-xl justify-center items-center">
        <Image src={product.src} width={175} height={175} alt={product.name} />
        <div className="flex flex-col gap-2 mx-3">
          <h2 className="font-bold text-xl">{product.name}</h2>
          <p className="text-sm text-primary">{product.category}</p>
          <p>{product.description}</p>
          <div className="mt-3"></div>
        </div>
      </div>
    </Link>
  );
}
