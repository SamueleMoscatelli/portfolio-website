import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Set the custom favicon */}
        <link rel="icon" href="/portfolio-website/favicon.png" type="image/png" />
        
        {/* Optional: Set apple-touch-icon for iOS */}
        <link rel="apple-touch-icon" href="/portfolio-website/favicon.png" />
        
        {/* Optional: Define a theme color */}
        <meta name="theme-color" content="#000000" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
