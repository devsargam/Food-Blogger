import NavBar from "@/components/Nav";
import SignUp from "@/components/SignUp";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FoodBook - Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {/* This project uses tailwindcss for css */}
      <main className=" bg-gray-50 min-h-screen">
        {/* TODO: Implement Search in the navbar */}
        <NavBar />

        <SignUp />

        {/* Footer component */}
      </main>
    </>
  );
}
