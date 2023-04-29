import Image from "next/image";
import Link from "next/link";
import React from "react";

function Post({
  id,
  imageUrl,
  title,
  description,
  cookingTime,
  tags,
  author,
  likes,
  comments,
}) {
  const [isLiked, setIsLiked] = React.useState(true);

  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg my-5">
      <Link href={`/posts/${id}`}>
        <section>
          <Image
            className="w-full"
            src={imageUrl}
            height={1000}
            width={1000}
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
              ? tags.map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  );
                })
              : null}
            <hr />
          </div>
        </section>
      </Link>
      {/* Like, comment, share */}
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-1">
          {isLiked ? (
            <button
              onClick={() => setIsLiked(false)}
              // className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <Image src="/posts/like.svg" height={30} width={30} alt="heart" />
            </button>
          ) : (
            <button onClick={() => setIsLiked(true)}>
              <Image
                src="/posts/notLike.svg"
                height={30}
                width={30}
                alt="heart"
              />
            </button>
          )}{" "}
          {likes}
        </div>
        {/* TODO: Implement logic for comment */}
        <div className="flex items-center gap-1">
          <button onClick={() => {}}>
            <Image
              src="/posts/comment.svg"
              height={30}
              width={30}
              alt="comment"
            />
          </button>
          {comments}
        </div>
        {/* TODO: Implement logic for share */}
        <button onClick={() => {}}>
          <Image src="/posts/share.svg" height={30} width={30} alt="share" />
        </button>
      </div>
    </div>
  );
}

export default Post;
