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
      <main>
        <h1>Food Blogger</h1>
        <p>This is where the project starts</p>
      </main>
    </>
  );
}
