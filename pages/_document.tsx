import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Dojah" />
        </Head>
        <body className="font-athletics">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
