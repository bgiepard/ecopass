import Link from 'next/link';
import React from 'react';

export default function FeaturedProducts({ product }) {
  return (
    <div className="flex border-2 border-white shadow-md w-full h-[240px] mt-10 gap-5 justify-center items-center rounded-xl">
      <img src={product.src} className="w-[180px]" />
      <div className="flex flex-col gap-2 mr-2">
        <h2 className="font-bold text-xl">{product.name}</h2>
        <Link href={product.categoryLink} className="text-sm text-blue-500">
          {product.category}
        </Link>
        <p>{product.description}</p>
        <div className="mt-3">
          <Link href={product.link}>
            <button className="bg-blue-500 rounded-2xl text-white px-3 py-1 shadow-sm hover:shadow-md float-right mr-5">
              Sprawdź cenę
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
