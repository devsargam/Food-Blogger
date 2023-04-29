import Post from "./Post";
import posts from "@/data/mock-posts";

function Posts() {
  return (
    <div className="flex flex-col justify-center items-center">
      {posts.map((post) => {
        return (
          <Post
            key={post.postId}
            id={post.postId}
            imageUrl={post.images[0]}
            title={post.heading}
            description={post.subHeading}
            cookingTime={post.cookTime}
            tags={post.tags}
            author={post.author}
            likes={post.likes}
            comments={post.comments}
          />
        );
      })}
    </div>
  );
}

export default Posts;
