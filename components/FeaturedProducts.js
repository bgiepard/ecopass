import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function FeaturedProducts({ product }) {
  return (
    <div className="flex lg:flex-row flex-col border-2 border-white bg-white shadow-md w-full p-3 h-fit mt-10 gap-5 justify-center items-center rounded-xl">
      <Image src={product.src} width={175} height={175} alt={product.name} />
      <div className="flex flex-col gap-2 mr-2">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <Link href={product.categoryLink} className="text-sm text-primary">
          {product.category}
        </Link>
        <p>{product.description}</p>
        <div className="mt-3">
          <Link href={product.link}>
            <button
              aria-label="sprawdź cenę"
              className="bg-primary rounded-2xl text-white px-3 py-1 shadow-sm hover:shadow-md float-right lg:mr-5 focus:outline-none focus:ring-2 focus:ring-primary">
              Sprawdź cenę
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
