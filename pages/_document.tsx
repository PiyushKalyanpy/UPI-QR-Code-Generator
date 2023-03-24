import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
        <title>ShufflePay - Generate UPI QR code</title>
        <meta name="google-site-verification" content="PUN3pQlnCXje773_cMwqlyNJhxbWWP_kLfqpRkptS_Y" />
        <link rel="canonical" href="https://shufflepay.vercel.app/generator" />
        <meta
          name="description"
          content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandhive.svg" />
        {/* add href land and content for serp  */}
        <link rel="canonical" href="https://shufflepay.vercel.app/" />
        <meta
          name="description"
          content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brandhive.svg" />
        <meta name="theme-color" content="#2D3748" />
        <meta property="og:url" content="https://shufflepay.vercel.app/" />
        <meta property="og:title" content="ShufflePay" />
        <meta
          property="og:description"
          content="This is a web application that allows users to generate UPI QR codes easily. . Users can enter their UPI ID, amount, and description, and the app will generate a QR code that can be scanned by any UPI-compliant mobile app to make a payment."
        />
        <meta
          property="og:image"
          content="https://shufflepay.vercel.app/shufflepaybrand.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="ShufflePay" />
        <link rel="apple-touch-icon" sizes="120x120" href="/brandhive.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brandhive.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brandhive.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  );
}
