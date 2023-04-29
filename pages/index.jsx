import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Posts from "@/components/Posts";
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
      <main className=" bg-gray-50">
        {/* TODO: Implement Search in the navbar */}
        <NavBar />
        {/* <Posts /> */}

        {/* Footer component */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
