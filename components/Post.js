import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <Link
      href={`blog/${post.slug}`}
      className="w-full md:w-[340px] border-2 mt-10 bg-white rounded-xl border-white shadow-md overflow-hidden hover:shadow-xl">
      <div className="h-[200px] overflow-hidden">
        <Image
          src={post.cover}
          width={300}
          height={150}
          className="mb-8 object-cover w-full h-full opacity-80"
          alt={`${post.title} ${post.title_second_line}`}
          priority
        />
      </div>
      <h2 className="text-[18px] font-bold mb-3 mt-5 pl-5 pr-5 block sm:h-[120px]">
        {post.title} {post.title_second_line}
      </h2>
      <div className="px-5 flex justify-between mb-3 text-xs">
        <p>{post.date}</p>
        <p className="text-primary">{post.tags[0]}</p>
      </div>
      <p className="pl-5 pr-3 pb-5">{`${post.description.slice(0, 100)}...`}</p>
    </Link>
  );
}
