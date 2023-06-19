import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedProducts({ product }) {
  return (
    <div className="flex sm:flex-row flex-col h-fit border-2 border-white shadow-md w-full p-3 sm:h-[240px] mt-10 gap-5 justify-center items-center rounded-xl">
      <Image src={product.src} width={175} height={175} alt={product.name} />
      <div className="flex flex-col gap-2 mr-2">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <Link href={product.categoryLink} className="text-sm text-primary">
          {product.category}
        </Link>
        <p>{product.description}</p>
        <div className="mt-3">
          <Link href={product.link}>
            <button className="bg-primary rounded-2xl text-white px-3 py-1 shadow-sm hover:shadow-md float-right sm:mr-5">
              Sprawdź cenę
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
