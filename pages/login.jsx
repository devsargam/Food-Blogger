import NavBar from "@/components/NavBar";
import LogIn from "@/components/LogIn";
import Head from "next/head";

export default function Home() {
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

        <LogIn />

        {/* Footer component */}
      </main>
    </>
  );
}
