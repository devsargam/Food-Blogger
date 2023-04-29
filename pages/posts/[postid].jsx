import React from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import recipe from "@/data/mock-recipe";
import Image from "next/image";

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
      <section>
        <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
          <h1>{recipe.heading}</h1>
          <h4>{recipe.subHeading}</h4>
          <p>Estimated Cooking Time: {recipe.cookTime}</p>
          <p>Total Servings: {recipe.noOfServings}</p>
          <h2>Ingredients</h2>

          <ol>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>

          <h2>Instructions</h2>
          <ol>
            {recipe.steps.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <Image
            src={recipe.images[0]}
            width={1000}
            height={1000}
            alt="Recipe Image"
          />
        </div>
      </section>
    </main>
  );
}

export default postId;
