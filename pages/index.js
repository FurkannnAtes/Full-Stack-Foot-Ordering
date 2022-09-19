import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home";

export default function index() {
  return (
    <div className="wrapper  d-flex justify-content-center">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
      </Head>
      <Home />
    </div>
  );
}
