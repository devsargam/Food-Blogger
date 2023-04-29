import NavBar from "@/components/NavBar";
import Head from "next/head";
import React from "react";

function aboutus() {
  return (
    <>
      <Head>
        <title>Food Blogger</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {/* This project uses tailwindcss for css */}
      <main className=" bg-gray-50 min-h-screen">
        {/* TODO: Implement Search in the navbar */}
        <NavBar />
        <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
          <h1>Food Book</h1>
          <h3>The Ultimate Community for Food Lovers and Home Cooks!</h3>
          <p>
            Welcome to Cookbook, a web app created by four passionate students
            for a hackathon! Our app is designed to be the ultimate online
            community for foodies and home cooks, where you can share your
            favorite cooking recipes as a post and connect with other food
            lovers from around the world.
          </p>
          <p>
            Our mission is to provide a platform where users can discover and
            share their love for food, while building a community of passionate
            home cooks who inspire and support each other. Whether you're a
            beginner or an experienced cook, Cookbook has something for
            everyone. Our user-friendly interface makes it easy to upload your
            recipes, browse through others' posts, like and comment on them, and
            even follow your favorite cooks.
          </p>
          <h3>Created By:</h3>
          <ol>
            <li>Piyush Raj</li>
            <li>Sargam Poudel</li>
            <li>Prashant Joshi</li>
            <li>Pawan Pandey</li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default aboutus;
