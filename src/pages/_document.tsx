import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
            {console.clear()}
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.css"
          />
          <script
            async
            src="https://cdn.snipcart.com/themes/v3.0.26/default/snipcart.js"
          ></script>
          <div
            hidden
            id="snipcart"
            data-api-key="YjNmYTFmMzItMjg3YS00YzRhLWJjN2ItYWU5NmQ5MGQzOWQwNjM3NDI2ODE4OTk5MTM0ODc2"
          ></div>
          <style jsx>
            {`
              .ytp-chrome-top,
              .ytp-show-cards-title {
                display: none !important;
              }
            `}
          </style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
