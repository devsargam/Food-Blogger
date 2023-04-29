import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/Nav";

function postId() {
  const router = useRouter();
  const { postid } = router.query;

  React.useEffect(() => {
    if (postid) {
      console.log(postid);
    }
  }, [postid]);

  return (
    <main>
      <NavBar />
      <h1>Post ID: {postid}</h1>
    </main>
  );
}

export default postId;
