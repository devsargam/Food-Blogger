import Post from "./Post";
import posts from "@/data/mock-posts";

function Posts() {
  console.log(posts);
  return (
    <div className="flex flex-col justify-center items-center">
      {posts.map((post) => {
        console.log(post);
        return (
          <Post
            key={post.postId}
            imageUrl={post.images[0]}
            title={post.heading}
            description={post.subHeading}
            cookingTime={post.cookTime}
            tags={post.tags}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

export default Posts;
