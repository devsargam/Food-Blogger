import Image from "next/image";
import React from "react";

function Post({ imageUrl, title, description, cookingTime, tags, author }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-5">
      <Image
        className="w-full"
        src={imageUrl}
        height={100}
        width={100}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base text-right">
          By <span className="text-blue-500 font-bold">@{author}</span>
        </p>
      </div>
      <div className="px-6 pb-2">
        <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
          {cookingTime}
        </span>
        {tags.length
          ? tags.map((tag) => {
              return (
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {tag}
                </span>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Post;
