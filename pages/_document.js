import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* ReactBootstrap Script */}
        <Script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin={true}
        ></Script>
        <Script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin={true}
        ></Script>
        <Script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossOrigin={true}
        ></Script>
        <script>var Alert = ReactBootstrap.Alert;</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
