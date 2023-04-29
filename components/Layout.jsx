import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Food Book</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
