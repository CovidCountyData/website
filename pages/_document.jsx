import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Layouts/Footer";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zxx">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="icon"
            type="image/svg"
            href={require("../images/ccd_favicon.png")}
          />
          <meta
            name="twitter:image"
            content="https://github.com/valorumdata/cmdc-website/raw/master/images/homepage_image.png"
          />
          <script
            async
            defer
            data-domain="covid.valorum.ai"
            src="https://plausible.io/js/plausible.js"
          />
        </Head>
        <body>
          <div className="wrapper">
            <Main />
            <div className="push" />
          </div>
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
